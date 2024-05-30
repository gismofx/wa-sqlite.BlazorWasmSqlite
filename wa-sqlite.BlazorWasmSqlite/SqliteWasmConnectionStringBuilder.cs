using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite
{
    public class SqliteWasmConnectionStringBuilder
    {
        public string Filename { get; init; }

        public string DatabaseName { get; init; }
    }
}
