namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// Represents a row returned by <c>PRAGMA table_info</c>.
/// Used by <see cref="Extensions.SqliteWasmExtensions.QueryTableSchemaAsync"/>.
/// </summary>
public class SqliteColumnInfo
{
    /// <summary>Zero-based column index.</summary>
    public int cid { get; set; }
    /// <summary>Column name.</summary>
    public string? Name { get; set; }
    /// <summary>Declared column type affinity (e.g. <c>TEXT</c>, <c>INTEGER</c>).</summary>
    public string? Type { get; set; }
    /// <summary><c>1</c> if the column has a <c>NOT NULL</c> constraint; otherwise <c>0</c>.</summary>
    public int NotNull { get; set; }
    /// <summary>The column's default value expression, or <c>null</c> if none is declared.</summary>
    public string? Dflt_value { get; set; }
    /// <summary><c>1</c> if the column is part of the primary key; otherwise <c>0</c>.</summary>
    public int Pk { get; set; }

    /// <inheritdoc/>
    public override string ToString() =>
        $"{Name}-{Type}{(NotNull == 1 ? "-NotNull" : "")}{(Pk == 1 ? "-pk" : "")}";
}
