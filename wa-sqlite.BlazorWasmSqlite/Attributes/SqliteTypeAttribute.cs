using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    [AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
    public class SqliteTypeAttribute : Attribute
    {

        public string ColumnType { get; set; }
        public bool NotNull { get; set; }

        public bool Unique { get; set; }

        public SqliteTypeAttribute(string sqliteColumnType = "TEXT", bool notNull = false, bool unique = false)//SqliteType sqliteColumnType)
        {
            ColumnType = sqliteColumnType;
            NotNull = notNull;
            Unique = unique;
        }


    }

    public sealed class SqliteType
    {

        public const string Text = "TEXT";
        public const string Numeric = "NUMERIC";
        public const string Integer = "INTEGER";
        public const string Real = "REAL";
        public const string Blob = "BLOB";

        //public static SqliteType Text { get; } = new SqliteType("TEXT");
        //public static SqliteType Numeric { get; } = new SqliteType("NUMERIC");
        //public static SqliteType Integer { get; } = new SqliteType("INTEGER");

        //public static SqliteType Real { get; } = new SqliteType("REAL");
        //public static SqliteType Blob { get; } = new SqliteType("BLOB");

        //public string ColumnType { get; private set; }

        //private SqliteType(string sqliteColumnType)
        //{
        //    ColumnType= sqliteColumnType;
        //}

        //public override string ToString() => ColumnType;
    }

}
