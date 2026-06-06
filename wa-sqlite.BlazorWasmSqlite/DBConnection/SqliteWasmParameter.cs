using System;
using System.Data;
using System.Data.Common;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// Represents a parameter to a <see cref="SqliteWasmCommand"/>.
/// </summary>
public sealed class SqliteWasmParameter : DbParameter
{
#pragma warning disable CS8764 // Nullability of return type doesn't match overridden member
#pragma warning disable CS8765 // Nullability of parameter 'value' doesn't match overridden member
    /// <inheritdoc/>
    public override string ParameterName { get; set; } = string.Empty;
    /// <inheritdoc/>
    public override object? Value { get; set; }
    /// <inheritdoc/>
    public override DbType DbType { get; set; } = DbType.String;
    /// <inheritdoc/>
    public override ParameterDirection Direction { get; set; } = ParameterDirection.Input;
    /// <inheritdoc/>
    public override bool IsNullable { get; set; } = true;
    /// <inheritdoc/>
    public override int Size { get; set; }
    /// <inheritdoc/>
    public override string SourceColumn { get; set; } = string.Empty;
    /// <inheritdoc/>
    public override bool SourceColumnNullMapping { get; set; }
#pragma warning restore CS8764
#pragma warning restore CS8765

    /// <summary>Initialises a parameter with default values.</summary>
    public SqliteWasmParameter() { }

    /// <summary>Initialises a named parameter with a value.</summary>
    public SqliteWasmParameter(string name, object? value)
    {
        ParameterName = name;
        Value = value;
    }

    /// <inheritdoc/>
    public override void ResetDbType() => DbType = DbType.String;
}
