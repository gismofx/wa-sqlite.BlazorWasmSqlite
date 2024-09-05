using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class SqliteIndexColumnAttribute : Attribute
    {
        public bool Unique { get; set; }

        public SqliteIndexColumnAttribute(bool unique = false)
        {
            Unique = unique;
        }
    }
}
