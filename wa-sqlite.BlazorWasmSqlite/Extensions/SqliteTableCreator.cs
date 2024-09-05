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
    public class SqliteTableCreator
    {
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
                var columnAtt = prop.GetCustomAttribute<SqliteTypeAttribute>() ?? new SqliteTypeAttribute(GetSqliteColumnFromType(prop.PropertyType));
                var pk = prop.Name.Equals("Id", StringComparison.OrdinalIgnoreCase) ? "PRIMARY KEY" : string.Empty;
                var sqlType = columnAtt.ColumnType;
                columnProps.Add($"{prop.Name} {sqlType} {pk} {(columnAtt.Unique ? "UNIQUE" : "")} {(columnAtt.NotNull ? "NOT NULL" : "")}".Trim());
            }
            sb.Append(string.Join($",", columnProps));//\r\n
            sb.Append(");");
            //return sb.ToString();

            var creates = new List<string>();
            creates.Add(sb.ToString());




            return creates;

        }

        public static List<string> GenericColumnIndexes(List<PropertyInfo?> entityProperties, string tableName)
        {
            var indexCommands = new List<string>(); 
            var indexes = entityProperties.Where(x => x.GetCustomAttribute<SqliteIndexColumnAttribute>() != null);//.ToList();
            
            if (!indexes.Any()) return indexCommands;
            
            foreach (var prop in indexes!)
            {
                var att = prop.GetCustomAttribute<SqliteTypeAttribute>();
                var indAdd = $"CREATE {(att.Unique ? "UNIQUE" : "")} INDEX IF NOT EXISTS ind_{prop.Name} on {tableName} ({prop.Name})";
                indexCommands.Add(indAdd);
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
            //var check = type.IsAssignableTo(typeof(T));
            //if (!check) throw new NotImplementedException($"ISyncableEntity not applied to {nameof(type)}");
        }


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
                    return "TEXT";
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
