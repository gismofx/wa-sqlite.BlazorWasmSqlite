using System;
using System.Collections;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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



        public static async Task<int> Upsert<T>(this SqliteWasmInterop interop, IEnumerable<T> records, string tableName) //where T : IEnumerable<T>
        {
            //var type = GetTypeOrGenericType(typeof(T));
            var type = typeof(T);
            var columnProperties = GetAllColumns<T>();
            var columns = columnProperties.Select(x => x.Name);

            var explicitKeyProperties = ExplicitKeyPropertiesCache(type);
            var keyProperties = KeyPropertiesCache(type);
            if (keyProperties.Count == 0 && explicitKeyProperties.Count == 0)
                throw new ArgumentException("Entity must have at least one [Key] or [ExplicitKey] property");

            //var sql = 
            //return await interop.ReplaceInto<T>(tableName, columns, records, null, null);//, transaction, commandTimeout);

            return await interop.Upsert<T>(tableName, columns, records);

        }

        private static async Task<int> Upsert<T>(this SqliteWasmInterop interop, string tableName, IEnumerable<string> columns, IEnumerable<T> entitiesToUpsert)
        {
            var valueSb = new StringBuilder();
            var inserts = new List<string>();//list of each record's values in sql format in columm order
            long i = 0;
            var sqlParams = new Dictionary<string, object>();//Key-Value pairs of parameter and value for query

            foreach (var entity in entitiesToUpsert)
            {
                var recordAsDict = JsonSerializer.Deserialize<Dictionary<string, object>>(JsonSerializer.Serialize(entity));
                var valueList = new List<string>();
                foreach (var column in columns)
                {
                    var p = $"@p{i}";
                    sqlParams.Add(p, recordAsDict![column]);// maybe needs @ symbol?
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

            var columnSet = new List<string>();
            foreach (var column in columns)
            {
                columnSet.Add($"{column} = excluded.{column}");
            }

            var onConflictDoUpdate = $"ON CONFLICT (Id) DO UPDATE SET {string.Join(',', columnSet)}";
                //e.g. "ON CONFLICT(name) DO UPDATE SET phonenumber=excluded.phonenumber;"
            var cmd = $"INSERT INTO {tableName} ({String.Join(",", columns)}) VALUES {String.Join(",", inserts)} {onConflictDoUpdate}";
            return await interop.Execute(cmd, sqlParams);

            //return await interop ReplaceInto(intoTableName, columns, inserts, sqlParams, transaction, commandTimeout);
        }


        //public static async Task<int> ReplaceInto<T>(this SqliteWasmInterop interop, T record, string tableName)
        //{
        //    return await interop.Upsert(new List<T>() { record }, tableName);
        //}

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

        //public static async Task<int> UpsertAsync<T>(this IDbConnection db,
        //                                     IEnumerable<T> entitiesToUpsert,
        //                                     int chunkSize = 1000,
        //                                     IDbTransaction transaction = null,
        //                                     int? commandTimeout = null)
        //{
        //    var type = typeof(T);
        //    //var contribType = typeof(SqlMapperExtensions);
        //    //var tableName = contribType.GetTableName(type);
        //    var columnsProperties = GetAllColumns<T>();
        //    var columns = columnsProperties.Select(x => x.Name);

        //    var explicitKeyProperties = contribType.ExplicitKeyPropertiesCache(type);
        //    var keyProperties = contribType.KeyPropertiesCache(type);
        //    if (keyProperties.Count == 0 && explicitKeyProperties.Count == 0)
        //        throw new ArgumentException("Entity must have at least one [Key] or [ExplicitKey] property");

        //    var dbConnectionType = db.GetType().Name;
        //    int result;
        //    switch (dbConnectionType)
        //    {
        //        case "SqliteConnection":
        //        case "SQLiteConnection":
        //            result = await db.ReplaceInto<T>(tableName, columns, entitiesToUpsert, transaction, commandTimeout);
        //            break;
        //        case "MySqlConnection":
        //            result = await db.MySQLUpsertAsync<T>(entitiesToUpsert, columns, tableName, chunkSize, transaction, commandTimeout);
        //            break;
        //        default:
        //            throw new Exception($"No method found for database type: {dbConnectionType}");
        //    }
        //    return result;


        //}

        private static List<PropertyInfo> GetAllColumns<T>()
        {
            var type = typeof(T);
            //var contribType = typeof(SqlMapperExtensions);

            var allProperties = TypePropertiesCache(type);
            var computedProperties = ComputedPropertiesCache(type);// ComputedPropertiesCache(type);
            var keyProperties = KeyPropertiesCache(type);
            var allPropertiesExceptKeyAndComputed = allProperties.Except(keyProperties.Union(computedProperties)).ToList();
            return allPropertiesExceptKeyAndComputed;
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

        //private static async Task<int> ReplaceInto<Tentity>(this IDbConnection db,
        //                                                    string tableName,
        //                                                    IEnumerable<string> columns,
        //                                                    IEnumerable records,
        //                                                    IDbTransaction transaction = null,
        //                                                    int? commandTimeout = null)
        //{
        //    var valueSb = new StringBuilder();
        //    var inserts = new List<string>();
        //    var dynamicParams = new DynamicParameters();
        //    long i = 0;

        //    var type = GetTypeOrGenericType(typeof(Tentity));

        //    foreach (var r in records)
        //    {
        //        var valueList = new List<string>();
        //        foreach (var column in columns)
        //        {
        //            var value = type.GetProperty(column)?.GetValue(r, null);
        //            var p = $"p{i}";
        //            dynamicParams.Add(p, value);
        //            valueList.Add($"@{p}");
        //            i++;
        //        }
        //        valueSb.Append("(");
        //        valueSb.Append(String.Join(",", valueList));
        //        valueSb.Append(")");
        //        inserts.Add(valueSb.ToString());
        //        valueSb.Clear();
        //    }
        //    return await db.ReplaceInto(tableName, columns, inserts, dynamicParams, transaction, commandTimeout);
        //}


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
            var keyProperties = allProperties.Where(p => p.GetCustomAttributes(true).Any(a => a is KeyAttribute)).ToList();

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
            if (attributes.Count != 1) return true;

            //var writeAttribute = (WriteAttribute)attributes[0];
            var writeProp = attributes[0].GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public).Where(x => x.Name == "Write" && x.PropertyType is bool).First();
            var write = (bool)writeProp.GetValue(attributes[0]);
            return write;
        }
    }

}
