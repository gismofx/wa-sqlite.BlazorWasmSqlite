using System;
using System.Data;
using System.Data.Common;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// Represents a parameter to a <see cref="SqliteWasmCommand"/>.
/// </summary>
public sealed class SqliteWasmParameter : DbParameter
{
    public override string ParameterName { get; set; } = string.Empty;
    public override object? Value { get; set; }
    public override DbType DbType { get; set; } = DbType.String;
    public override ParameterDirection Direction { get; set; } = ParameterDirection.Input;
    public override bool IsNullable { get; set; } = true;
    public override int Size { get; set; }
    public override string SourceColumn { get; set; } = string.Empty;
    public override bool SourceColumnNullMapping { get; set; }

    public SqliteWasmParameter() { }

    public SqliteWasmParameter(string name, object? value)
    {
        ParameterName = name;
        Value = value;
    }

    public override void ResetDbType() => DbType = DbType.String;
}
