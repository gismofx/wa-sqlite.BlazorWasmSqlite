using Dapper;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using wa_sqlite.BlazorWasmSqlite.Batch;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

namespace wa_sqlite.BlazorWasmSqlite.Extensions
{
    public static class SqliteWasmExtensions
    {
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>> KeyProperties = new ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>>();
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>> ExplicitKeyProperties = new ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>>();
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>> TypeProperties = new ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>>();
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>> ComputedProperties = new ConcurrentDictionary<RuntimeTypeHandle, IEnumerable<PropertyInfo>>();
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, string> GetQueries = new ConcurrentDictionary<RuntimeTypeHandle, string>();
        private static readonly ConcurrentDictionary<RuntimeTypeHandle, string> TypeTableName = new ConcurrentDictionary<RuntimeTypeHandle, string>();



        /// <summary>
        /// Get the type. If the type is IEnumerable, get the containing type
        /// </summary>
        /// <param name="Tentity"></param>
        /// <returns></returns>
        private static Type GetTypeOrGenericType(Type Tentity)
        {
            //var type = typeof(Tentity);
            var type = Tentity;
            if (type.IsGenericType)
            {
                var typeInfo = type.GetTypeInfo();
                bool implementsGenericIEnumerableOrIsGenericIEnumerable =
                    typeInfo.ImplementedInterfaces.Any(ti => ti.IsGenericType && ti.GetGenericTypeDefinition() == typeof(IEnumerable<>)) ||
                    typeInfo.GetGenericTypeDefinition() == typeof(IEnumerable<>);

                if (implementsGenericIEnumerableOrIsGenericIEnumerable)
                {
                    type = type.GetGenericArguments()[0];
                }

            }
            return type;
        }


        /// <summary>
        /// Returns all writable, non-computed, non-key columns for <paramref name="type"/>.
        /// Respects <see cref="Attributes.SqliteColumnIgnoreAttribute"/>, <c>[Write(false)]</c>,
        /// and <c>[Computed]</c> — matching the column set used by <see cref="SqliteWorkerPayloadBuilder"/>.
        /// </summary>
        public static List<PropertyInfo> GetAllColumns(Type type)
        {
            //var contribType = typeof(SqlMapperExtensions);

            var allProperties = TypePropertiesCache(type);
            var computedProperties = ComputedPropertiesCache(type);// ComputedPropertiesCache(type);
            var keyProperties = KeyPropertiesCache(type);
            var allPropertiesExceptKeyAndComputed = allProperties.Except(keyProperties.Union(computedProperties)).ToList();
            return allPropertiesExceptKeyAndComputed;
        }


        /// <inheritdoc cref="GetAllColumns(Type)"/>
        public static List<PropertyInfo> GetAllColumns<T>()
        {
            var type = typeof(T);
            return GetAllColumns(type);
        }

        private static List<PropertyInfo> ComputedPropertiesCache(Type type)
        {
            if (ComputedProperties.TryGetValue(type.TypeHandle, out IEnumerable<PropertyInfo> pi))
            {
                return pi.ToList();
            }

            var computedProperties = TypePropertiesCache(type).Where(p => p.GetCustomAttributes(true).Any(a => a.GetType().Name == "ComputedAttribute")).ToList();///*Any(a => a is ComputedAttribute)).ToList();

            ComputedProperties[type.TypeHandle] = computedProperties;
            return computedProperties;
        }

        /// <summary>Resolves the SQLite table name for <typeparamref name="T"/> from a <c>[Table]</c> attribute, or falls back to <c>TypeName + "s"</c>.</summary>
        public static string GetTableName<T>() where T : class
        {
            return GetTableName(typeof(T));
        }

        /// <summary>Resolves the SQLite table name for <paramref name="type"/> from a <c>[Table]</c> attribute, or falls back to <c>TypeName + "s"</c>.</summary>
        public static string GetTableName(Type type)
        {
            if (TypeTableName.TryGetValue(type.TypeHandle, out string name)) return name;

            if (false) return "";
            else
            {
                //NOTE: This as dynamic trick falls back to handle both our own Table-attribute as well as the one in EntityFramework 
                var tableAttrName =
                    type.GetCustomAttribute<TableAttribute>(false)?.Name
                    ?? (type.GetCustomAttributes(false).FirstOrDefault(attr => attr.GetType().Name == "TableAttribute") as dynamic)?.Name;

                if (tableAttrName != null)
                {
                    name = tableAttrName;
                }
                else
                {
                    name = type.Name + "s";
                    if (type.IsInterface && name.StartsWith("I"))
                        name = name.Substring(1);
                }
            }

            TypeTableName[type.TypeHandle] = name;
            return name;
        }


        // ── SqliteWasmConnection extension — high-performance path ───────────

        /// <summary>
        /// Upserts a collection of entities via the Worker raw payload path.
        /// Uses <c>INSERT INTO ... ON CONFLICT(pk) DO UPDATE SET</c>.
        /// Zero named-parameter overhead; single Worker round-trip per batch.
        /// </summary>
        /// <typeparam name="T">Entity type. Must serialize to a flat JSON object.</typeparam>
        /// <param name="connection">Open <see cref="SqliteWasmConnection"/>.</param>
        /// <param name="tableName">Target SQLite table name.</param>
        /// <param name="records">Entities to upsert. Must be non-empty.</param>
        /// <param name="primaryKey">Primary key column name (default <c>"Id"</c>).</param>
        /// <param name="rowsPerStatement">Rows per INSERT statement (default 100).</param>
        /// <param name="ct">Cancellation token.</param>
        /// <returns>Total rows affected.</returns>
        public static async Task<int> UpsertAsync<T>(
            this SqliteWasmConnection connection,
            string tableName,
            IEnumerable<T> records,
            string primaryKey = "Id",
            int rowsPerStatement = 100,
            CancellationToken ct = default)
        {
            try
            {
                var payload = SqliteWorkerPayloadBuilder.BuildUpsertPayload(
                    tableName, records, primaryKey, rowsPerStatement);
                using var result = await SqliteJsInterop.BulkInsertRawUpsertAsync(
                    connection.ConnectionHandle, payload);

                if (result != null)
                {
                    var firstError = result.GetPropertyAsString("firstError");
                    if (firstError != null)
                        throw new InvalidOperationException(
                            $"SQLite error in table '{tableName}': {firstError}");

                    return (int)result.GetPropertyAsDouble("totalChanges");
                }
                return 0;
            }
            catch (Exception ex)
            {
                throw new InvalidOperationException(
                    $"UpsertAsync failed for table '{tableName}' (type: {typeof(T).Name}): {ex.Message}", ex);
            }
        }

        // ── Schema inspection ─────────────────────────────────────────────────

        /// <summary>
        /// Returns all tables (and views) in the database via <c>PRAGMA table_list</c>.
        /// The returned <see cref="SqliteTableInfo.Columns"/> collection is empty;
        /// call <see cref="QueryTableSchemaAsync"/> per table to populate it.
        /// </summary>
        public static async Task<IEnumerable<SqliteTableInfo>> QueryAllTablesAsync(
            this SqliteWasmConnection connection)
        {
            return await connection.QueryAsync<SqliteTableInfo>(
                "SELECT schema, name, type, " +
                "ncol AS NumberOfColumns, wr AS HasNoRowId, strict AS IsStrict " +
                "FROM pragma_table_list");
        }

        /// <summary>
        /// Returns column metadata for <paramref name="tableName"/> via <c>PRAGMA table_info</c>.
        /// </summary>
        public static async Task<IEnumerable<SqliteColumnInfo>> QueryTableSchemaAsync(
            this SqliteWasmConnection connection, string tableName)
        {
            return await connection.QueryAsync<SqliteColumnInfo>(
                $"PRAGMA table_info({tableName})");
        }

        private static List<PropertyInfo> ExplicitKeyPropertiesCache(Type type)
        {
            if (ExplicitKeyProperties.TryGetValue(type.TypeHandle, out IEnumerable<PropertyInfo> pi))
            {
                return pi.ToList();
            }

            var explicitKeyProperties = TypePropertiesCache(type).Where(p => p.GetCustomAttributes(true).Any(a=>a.GetType().Name == "ExplicitKeyAttribute")).ToList();//Any(/*a => a is ExplicitKeyAttribute*/)

            ExplicitKeyProperties[type.TypeHandle] = explicitKeyProperties;
            return explicitKeyProperties;
        }

        private static List<PropertyInfo> KeyPropertiesCache(Type type)
        {
            if (KeyProperties.TryGetValue(type.TypeHandle, out IEnumerable<PropertyInfo> pi))
            {
                return pi.ToList();
            }

            var allProperties = TypePropertiesCache(type);
            var keyProperties = allProperties.Where(p => p.GetCustomAttributes(true).Any(a => a.GetType().Name == "KeyAttribute")).ToList();

            if (keyProperties.Count == 0)
            {
                var idProp = allProperties.Find(p => string.Equals(p.Name, "id", StringComparison.CurrentCultureIgnoreCase));
                if (idProp != null && !idProp.GetCustomAttributes(true).Any(a => a.GetType().Name == "ExplicitKeyAttribute")) //Any(a => a is ExplicitKeyAttribute)
                {
                    keyProperties.Add(idProp);
                }
            }

            KeyProperties[type.TypeHandle] = keyProperties;
            return keyProperties;
        }

        private static List<PropertyInfo> TypePropertiesCache(Type type)
        {
            if (TypeProperties.TryGetValue(type.TypeHandle, out IEnumerable<PropertyInfo> pis))
            {
                return pis.ToList();
            }

            var properties = type.GetProperties().Where(IsWriteable).ToArray();
            TypeProperties[type.TypeHandle] = properties;
            return properties.ToList();
        }

        private static bool IsWriteable(PropertyInfo pi)
        {
            // [SqliteColumnIgnore] excludes from all SQLite operations (schema, insert, update)
            if (pi.GetCustomAttributes(false).Any(a => a.GetType().Name == "SqliteColumnIgnoreAttribute"))
                return false;

            var attributes = pi.GetCustomAttributes(false).Where(x => x.GetType().Name == "WriteAttribute").ToList(); // typeof(WriteAttribute), false
            if (attributes.Any())
            {
                var writeProp = attributes[0].GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(x => x.PropertyType == typeof(bool)).First();
                var write = (bool)writeProp.GetValue(attributes[0]);
                return write;
            }
            
            if (pi.CanWrite && pi.GetSetMethod(true).IsPublic)
            {
                return true;
                // The setter exists and is public.
            }

            return false;

        }
    }

}
