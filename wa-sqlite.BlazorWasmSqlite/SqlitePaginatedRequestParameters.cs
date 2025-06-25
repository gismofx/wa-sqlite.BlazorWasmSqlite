using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static wa_sqlite.BlazorWasmSqlite.Extensions.SqliteWasmExtensions;

namespace wa_sqlite.BlazorWasmSqlite
{
    public class SqlitePaginatedRequestParameters
    {
        public int page { get; set; }
        public int MaxRecordsPerPage { get; set; }
        public IEnumerable<string> OrderByColumns { get; set; }
        public SortOrderDirection SortOrder { get; set; } = SortOrderDirection.Ascending;
        public IEnumerable<string>? ColumnsToSearchOn { get; set; } = null;
        public string? WildcardQuery { get; set; } = null;
        public bool IsExact { get; set; } = false;
        public string? OtherParameterizedWhere { get; set; } = null;
        public SqliteQueryParams OtherParameters { get; set; } = null;
        
    }
}
