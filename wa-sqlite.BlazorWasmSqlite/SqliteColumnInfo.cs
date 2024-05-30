using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite
{
    public class SqliteColumnInfo
    {
        public int cid { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public int NotNull { get; set; }
        public string Dflt_value { get; set; }
        public int Pk { get; set; }

        public override string ToString()
        {
            return $"{Name}-{Type}{(NotNull==1?"-NotNull":"")}{(Pk==1?"-pk":"")}";
        }
    }
}
