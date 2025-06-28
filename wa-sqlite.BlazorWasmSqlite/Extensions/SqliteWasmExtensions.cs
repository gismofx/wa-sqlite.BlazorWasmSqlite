using Microsoft.Extensions.Options;
using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Transactions;

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

        public static async Task<T> FindById<T>(this SqliteWasmInterop interop, string id) where T : class
        {
            var tableName = GetTableName<T>();
            var sql = $"SELECT * from {tableName} where Id = @id";
            var sparams = new SqliteQueryParams();
            sparams.Add("@id", id);
            return await interop.QuerySingle<T>(sql, sparams);
        }


        public enum SortOrderDirection
        {
            Ascending,
            AscendingCI,
            Descending,
            DescendingCI,
        }

        public static async Task<(IEnumerable<T> records, int totalRecords)> FindPaginated<T>(this SqliteWasmInterop interop,
                                                                                    int page,
                                                                                    int maxRecordsPerPage,
                                                                                    IEnumerable<string> orderByColumns,
                                                                                    SortOrderDirection orderDirection = SortOrderDirection.Ascending,
                                                                                    IEnumerable<string>? columnsToSearchOn = null,
                                                                                    string? wildcardQuery = null,
                                                                                    bool isExact = false,
                                                                                    string otherParameterizedWhere = null,
                                                                                    SqliteQueryParams otherParameters = null)
        {
            var tableName = GetTableName(typeof(T));

            int offset = (page - 1) * maxRecordsPerPage;


          if (columnsToSearchOn is null) columnsToSearchOn = Enumerable.Empty<string>();

            string where = string.Empty;
            if (columnsToSearchOn.Count() == 1)
            {
                where = $"WHERE {columnsToSearchOn.First()} {(isExact ? " = " : "LIKE")} @query";
            }
            else
            {
                where = columnsToSearchOn.Any() ?
                    $"WHERE CONCAT_WS('|',{string.Join(",", columnsToSearchOn)}) LIKE @query"
                    : string.Empty;
            }

            if (!string.IsNullOrWhiteSpace(otherParameterizedWhere))
            {
                where = $"{where} {otherParameterizedWhere}";
            }



            var direction = orderDirection == SortOrderDirection.Ascending ? "ASC" : "DESC";


            var orderByCols = string.Join(",", orderByColumns);

            var sql = $"SELECT c.* from {tableName} AS c " +
                "INNER JOIN (" +
                $"SELECT id From {tableName} " +
                $"{where} " +
                $"ORDER BY {orderByCols} {direction} " +
                "LIMIT @limit " +
                "OFFSET @offset) " +
                "as tmp USING (id) " +
                $"ORDER BY {orderByCols} {direction} ";


            var sqlCount = $"SELECT COUNT(1) FROM {tableName} {where}";


            //ToDo: Add Query
            //sql = "Select * From Client LIMIT @rows OFFSET @startRow ORDER BY OwnerLastName, Id";
            var sparams = new SqliteQueryParams();
            sparams.Add("@limit", maxRecordsPerPage);
            sparams.Add("@offset", offset);
            foreach(var para in otherParameters??new SqliteQueryParams())
            {
                sparams.Add(para.Key, para.Value);
            }

            wildcardQuery = isExact ? wildcardQuery : $"%{wildcardQuery}%";
            wildcardQuery = string.IsNullOrWhiteSpace(wildcardQuery) ? "%" : wildcardQuery;
            wildcardQuery = wildcardQuery.Replace("'", @"\'");//escape singlequote
            wildcardQuery = wildcardQuery.Replace("\"", "\\\"");
            sparams.Add("@query", wildcardQuery);
            //var dto = new PaginatedQueryResultDTO<Client>();
            var records = await interop.Query<T>(sql, sparams);

            //var sqlCount = "SELECT COUNT(1) from Client";
            var total = await interop.QueryScalar<int>(sqlCount, sparams);
            return (records,total);
        }

        public static async Task<int> Upsert<T>(this SqliteWasmInterop interop, T record, string tableName)
        {
            return await interop.Upsert<T>(new List<T>() { record }, tableName);
        }

        public static async Task<int> Upsert<T>(this SqliteWasmInterop interop, IEnumerable<T> records, string tableName) //where T : IEnumerable<T>
        {
            //var type = GetTypeOrGenericType(typeof(T));
            var type = typeof(T);
            var columnProperties = GetAllColumns<T>();
            var columns = columnProperties.Select(x => x.Name);//.ToList(); //ToDo: remove ToList later

            var explicitKeyProperties = ExplicitKeyPropertiesCache(type);
            var keyProperties = KeyPropertiesCache(type);
            if (keyProperties.Count == 0 && explicitKeyProperties.Count == 0)
                throw new ArgumentException("Entity must have at least one [Key] or [ExplicitKey] property");

            keyProperties.AddRange(explicitKeyProperties);
            //if (keyProperties.Count != 1) 
                //throw new ArgumentException("Entity has more than one Key Attribute applied");

            //var sql = 
            //return await interop.ReplaceInto<T>(tableName, columns, records, null, null);//, transaction, commandTimeout);

            return await interop.Upsert<T>(tableName, columns,keyProperties.First().Name, records);

        }

        private static async Task<int> Upsert<T>(this SqliteWasmInterop interop, string tableName, IEnumerable<string> columns, string pkColumnName, IEnumerable<T> entitiesToUpsert)
        {
            //todo: we need to check size limitation and number of parameters and chunk the upserts
            //32766  defaul max parameters
            //size can be increases
            int maxParams = 32000;
            //var paramCount = columns.Count() * entitiesToUpsert.Count();
            //if (paramCount > maxParams)
            //{
            //    var chunkCount = paramCount % 32000;
            //}

            int resultCount = 0;
            try
            {
                //await interop.Open();
                //await interop.Execute("BEGIN TRANSACTION");
                foreach (var entityChunk in entitiesToUpsert.Chunk(maxParams / columns.Count()))
                {
                    var valueSb = new StringBuilder();
                    var inserts = new List<string>();//list of each record's values in sql format in columm order
                    long i = 0;
                    var sqlParams = new Dictionary<string, object>();//Key-Value pairs of parameter and value for query

                    foreach (var entity in entityChunk)
                    {
                        var recordAsDict = JsonSerializer.Deserialize<Dictionary<string, object>>(JsonSerializer.Serialize(entity, options: interop._JsonSerializerOptions));
                        var valueList = new List<string>();
                        foreach (var column in columns)
                        {
                            var p = $"@p{i}";
                            var value = recordAsDict![column]; //bool.TryParse((string)recordAsDict![column], out var b) ? b ? 1 : 0 : recordAsDict![column];
                            sqlParams.Add(p, value);// maybe needs @ symbol?
                            valueList.Add(p);// $"@{p}");
                            i++;
                        }
                        valueSb.Append($"({string.Join(",", valueList)})");
                        inserts.Add(valueSb.ToString());
                        valueSb.Clear();
                    }

                    var columnSet = new List<string>();
                    foreach (var column in columns.Where(x => x != pkColumnName))
                    {
                        columnSet.Add($"{column} = excluded.{column}");
                    }

                    var onConflictDoUpdate = $"ON CONFLICT ({pkColumnName}) DO UPDATE SET {string.Join(',', columnSet)}";
                    //e.g. "ON CONFLICT(name) DO UPDATE SET phonenumber=excluded.phonenumber;"
                    var cmd = $"INSERT INTO {tableName} ({String.Join(",", columns)}) VALUES {String.Join(",", inserts)} {onConflictDoUpdate}";
                    resultCount += await interop.Execute(cmd, sqlParams);
                }
                //await interop.Execute("COMMIT");

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error Upserting to {tableName}: {ex.Message}");
                //await interop.Execute("ROLLBACK");
            }
            finally
            {
                //await interop.Close();
            }
            return resultCount;

            //return await interop ReplaceInto(intoTableName, columns, inserts, sqlParams, transaction, commandTimeout);
        }


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


        public static List<PropertyInfo> GetAllColumns(Type type)
        {
            //var contribType = typeof(SqlMapperExtensions);

            var allProperties = TypePropertiesCache(type);
            var computedProperties = ComputedPropertiesCache(type);// ComputedPropertiesCache(type);
            var keyProperties = KeyPropertiesCache(type);
            var allPropertiesExceptKeyAndComputed = allProperties.Except(keyProperties.Union(computedProperties)).ToList();
            return allPropertiesExceptKeyAndComputed;
        }


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

        public static string GetTableName<T>() where T : class
        {
            return GetTableName(typeof(T));
        }

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


        private static async Task<int> ReplaceInto<T>(this SqliteWasmInterop interop,
                                       string intoTableName,
                                       IEnumerable<string> columns,
                                       IEnumerable<T> entitiesToReplaceInto,//,
                                       IDbTransaction transaction = null,
                                       int? commandTimeout = null)
        {
            var valueSb = new StringBuilder();
            var inserts = new List<string>();//list of each record's values in sql format in columm order
            //var dynamicParams = new DynamicParameters();
            long i = 0;
            var sqlParams = new Dictionary<string, object>();
            //foreach (var record in entitiesToReplaceInto)
            foreach (var record in entitiesToReplaceInto)
            {
                var recordAsDict = JsonSerializer.Deserialize<Dictionary<string, object>>(JsonSerializer.Serialize(record));
                var valueList = new List<string>();
                foreach (var column in columns)
                {
                    var p = $"@p{i}";
                    sqlParams.Add(p, recordAsDict[column]);// maybe needs @ symbol?
                    //dynamicParams.Add(p, record[column]);
                    valueList.Add(p);// $"@{p}");
                    i++;
                }
                valueSb.Append("(");
                valueSb.Append(string.Join(",", valueList));
                valueSb.Append(")");
                inserts.Add(valueSb.ToString());
                valueSb.Clear();
            }

            return await interop.ReplaceInto(intoTableName, columns, inserts, sqlParams, transaction, commandTimeout);
        }

        private static async Task<int> ReplaceInto(this SqliteWasmInterop interop,
                                                   string tableName,
                                                   IEnumerable<string> columns,
                                                   List<string> recordInserts,
                                                   Dictionary<string, object> parameters,
                                                   IDbTransaction transaction,
                                                   int? commandTimeout = null)
        {
            var cmd = $"REPLACE INTO {tableName} ({String.Join(",", columns)}) VALUES {String.Join(",", recordInserts)}";
            return await interop.Execute(cmd, parameters);// .ExecuteAsync(cmd, parameters, transaction, commandTimeout);
        }

        public static async Task<int> DropTable(this SqliteWasmInterop interop, string tableName)
        {
            var resultDropSql = $"DROP TABLE IF EXISTS {tableName};";
            var dropResult = await interop.Execute(resultDropSql);
            return dropResult;
        }

        public static async Task<int> DropView(this SqliteWasmInterop interop, string viewName)
        {
            var resultDropSql = $"DROP VIEW IF EXISTS {viewName};";
            var dropResult = await interop.Execute(resultDropSql);
            return dropResult;
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
