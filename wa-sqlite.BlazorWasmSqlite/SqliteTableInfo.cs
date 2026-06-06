using wa_sqlite.BlazorWasmSqlite.JsonConverters;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// Represents a row returned by <c>PRAGMA table_list</c>.
/// Used by <see cref="Extensions.SqliteWasmExtensions.QueryAllTablesAsync"/>.
/// </summary>
public class SqliteTableInfo
{
    /// <summary>The schema that contains the table (e.g. <c>main</c> or <c>temp</c>).</summary>
    public string? Schema { get; set; }
    /// <summary>The table name.</summary>
    public string? Name { get; set; }
    /// <summary>The object type: <c>table</c>, <c>view</c>, <c>shadow</c>, or <c>virtual</c>.</summary>
    public string? Type { get; set; }

    /// <summary>Number of columns in the table.</summary>
    [JsonPropertyName("ncol")]
    public int NumberOfColumns { get; set; }

    /// <summary><c>true</c> if the table was created with <c>WITHOUT ROWID</c>.</summary>
    [JsonPropertyName("wr")]
    public bool HasNoRowId { get; set; }

    /// <summary><c>true</c> if the table was created with <c>STRICT</c> type enforcement.</summary>
    [JsonPropertyName("strict")]
    public bool IsStrict { get; set; }

    /// <inheritdoc/>
    public override string ToString() => $"{Name}-{Type}-{NumberOfColumns}";

    /// <summary>Column metadata populated by <see cref="Extensions.SqliteWasmExtensions.QueryTableSchemaAsync"/>. Empty by default.</summary>
    [JsonIgnore]
    public IEnumerable<SqliteColumnInfo> Columns { get; set; } = System.Linq.Enumerable.Empty<SqliteColumnInfo>();
}
