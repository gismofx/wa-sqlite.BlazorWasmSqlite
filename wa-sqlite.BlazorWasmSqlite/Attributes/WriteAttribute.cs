using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Attributes
{
    [AttributeUsage(AttributeTargets.Property, Inherited = false, AllowMultiple = false)]
    public class WriteAttribute : Attribute
    {
        public bool Write { get; set; }
        public WriteAttribute(bool write)
        {
            Write = write;
        }
    }
}
