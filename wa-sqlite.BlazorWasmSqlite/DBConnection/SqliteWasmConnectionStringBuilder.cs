using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection
{
    /// <summary>
    /// Holds the two parameters required to open a <see cref="SqliteWasmConnection"/>.
    /// </summary>
    public class SqliteWasmConnectionStringBuilder
    {
        /// <summary>
        /// The IndexedDB VFS file name — used as the IDB database key.
        /// Must match the <c>fileName</c> value passed to every open call for the same database.
        /// </summary>
        public required string Filename { get; init; }

        /// <summary>
        /// The logical database name passed to <c>sqlite3_open_v2</c>.
        /// </summary>
        public required string DatabaseName { get; init; }
    }
}
