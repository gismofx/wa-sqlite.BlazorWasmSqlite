using wa_sqlite.BlazorWasmSqlite.JsonConverters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite
{
    public class SqliteTableInfo
    {
        public string Schema { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        
        [JsonPropertyName("ncol")]
        public int NumberOfColumns { get; set; }

        [JsonPropertyName("wr")]
        //[JsonConverter(typeof(BoolConverter))]
        public bool HasNoRowId { get; set; }
        
        [JsonPropertyName("strict")]
        //[JsonConverter(typeof(BoolConverter))]
        public bool IsStrict { get; set; }

        public override string ToString()
        {
            return $"{Name}-{Type}-{NumberOfColumns}";
        }

        [JsonIgnore]
        public IEnumerable<SqliteColumnInfo> Columns { get; set; } = Enumerable.Empty<SqliteColumnInfo>();
    }
}
