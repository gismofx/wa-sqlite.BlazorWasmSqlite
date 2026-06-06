using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Extensions
{
    /// <summary>
    /// Options that control DDL generation by <see cref="SqliteTableCreator"/>.
    /// </summary>
    public class TableCreatorOptions
    {
        /// <summary>
        /// TEXT columns are Case-Insensitive by default
        /// i.e. 'COLLATE NOCASE' in table create for the column
        /// Override individual columns by applying the CaseSensitiveAttribute
        /// </summary>
        public bool TextColumnsCaseInsensitive { get; set; } = true;
    }
}
