using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using wa_sqlite.BlazorWasmSqlite.Attributes;
using System.Diagnostics.Tracing;

namespace wa_sqlite.BlazorWasmSqlite.Extensions
{
    /// <summary>
    /// Class helps create Sqlite tables based on a model class
    /// </summary>
    public class SqliteTableCreator
    {
        public TableCreatorOptions Options { get; init; }

        public SqliteTableCreator(TableCreatorOptions options = null)
        {
            if (options == null) Options = new TableCreatorOptions();
            else Options = options;
        }

        /// <summary>
        /// Generate sqlite table created code
        /// Generate any index create code 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns>First value in list is alwasy the table create code. Subsequent values, if any, are column index creates</returns>
        public static List<string> GenerateSqliteCreateTable(Type type) //where T : ISyncableEntity
        {

            var tableName = SqliteWasmExtensions.GetTableName(type);
            //var props = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            var props = SqliteWasmExtensions.GetAllColumns(type);
            var sb = new StringBuilder($"CREATE TABLE {tableName} (");
            var columnProps = new List<string>();
            foreach (var prop in props)
            {
                var colCreate = ColumnCreate(prop);
                columnProps.Add(colCreate);
            }
            sb.Append(string.Join($",", columnProps));//\r\n
            sb.Append(");");
            //return sb.ToString();

            var creates = new List<string>();
            creates.Add(sb.ToString());
            var indexes = GenerateColumnIndexes(props,tableName);
            creates.AddRange(indexes);
            return creates;

        }

        private static string ColumnCreate(PropertyInfo prop)
        {
            //Get the attribute or create a new one with defaults
            var columnAtt = GetSqliteColumnAttributeOrDefault(prop);

            //is is an 'Id'?  Then it's primary key
            var pk = prop.Name.Equals("Id", StringComparison.OrdinalIgnoreCase) ? "PRIMARY KEY" : string.Empty;

            //get it's type
            var sqlType = columnAtt.ColumnType;
            //if text and case insensitive COLLATE NOCASE
            var collate = (sqlType == "TEXT" && columnAtt.CaseSensitive == false) ? "COLLATE NOCASE" : string.Empty;
            
            return $"{prop.Name} {sqlType} {collate} {pk} {(columnAtt.Unique ? "UNIQUE" : "")} {(columnAtt.AllowNull ? "" : "NOT NULL")}".Trim();
        }

        private static SqliteColumnAttribute GetSqliteColumnAttributeOrDefault(PropertyInfo prop)
        {
            var att = prop.GetCustomAttribute<SqliteColumnAttribute>() ?? new SqliteColumnAttribute(sqliteColumnType:GetSqliteColumnFromType(prop.PropertyType));
            if (string.IsNullOrWhiteSpace(att.ColumnType)) att.ColumnType = GetSqliteColumnFromType(prop.PropertyType);
            return att;
        }

        private static List<string> GenerateColumnIndexes(List<PropertyInfo?> entityProperties, string tableName)
        {
            var indexCommands = new List<string>(); 
            var indexes = entityProperties.Where(x => x.GetCustomAttribute<SqliteColumnAttribute>() != null);//.ToList();
            
            if (!indexes.Any()) return indexCommands;
            
            foreach (var prop in indexes!)
            {
                var att = prop.GetCustomAttribute<SqliteColumnAttribute>();
                var indexCreate = att.Index ? $"CREATE {(att.Unique ? "UNIQUE" : "")} INDEX IF NOT EXISTS ind_{prop.Name}_{tableName} on {tableName} ({prop.Name})" : string.Empty;
                indexCommands.Add(indexCreate);
            }

            return indexCommands;

        }

        /// <summary>
        /// Generate sqlite table created code
        /// Generate any index create code 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <returns>First value in list is alwasy the table create code. Subsequent values, if any, are column index creates</returns>
        public static List<string> GenerateSqliteCreateTable<T>() //where T : ISyncableEntity
        {
            var type = typeof(T);
            return GenerateSqliteCreateTable(type);
        }


        /// <summary>
        /// Map a C# type to a sqlite type
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static string GetSqliteColumnFromType(Type type)
        {
            var t = type.Name;
            if (t.Contains("Nullable"))
            {
                t = type.ToString().Split("[")[1];

                t=t.Remove(t.Length - 1).Replace("System.","");
            }
                
            switch (t)
            {
                case nameof(String):
                case nameof(DateTime):
                    return "NUMERIC";//return "TEXT";
                case nameof(UInt32): //unit
                case nameof(UInt64): //ulong
                case nameof(UInt128): //
                case nameof(Int32): //int
                case nameof(Int64): //long
                case nameof(Int128): //Long
                    return "INTEGER";
                case nameof(Boolean):
                    return "BOOLEAN";
                case nameof(Double):
                    return "DOUBLE";
                case nameof(Decimal):
                    return "NUMERIC";
                default:
                    throw new NotImplementedException($"No mapping for {t}");

            }
            //var type = prop.PropertyType.ToString();
        }


    }
}
