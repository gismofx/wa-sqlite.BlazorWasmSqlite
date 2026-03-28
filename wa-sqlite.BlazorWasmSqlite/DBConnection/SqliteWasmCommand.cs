using System;
using System.Data;
using System.Data.Common;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// DbCommand implementation backed by <see cref="SqliteJsInterop"/>.
/// Async-only — sync methods throw <see cref="NotSupportedException"/>.
/// </summary>
public sealed class SqliteWasmCommand : DbCommand
{
    private readonly SqliteWasmParameterCollection _parameters = new();
    private SqliteWasmConnection? _connection;

    public SqliteWasmCommand() { }

    public SqliteWasmCommand(string commandText)
    {
        CommandText = commandText;
    }

    public SqliteWasmCommand(string commandText, SqliteWasmConnection connection)
    {
        CommandText = commandText;
        _connection = connection;
    }

    // ── Properties ─────────────────────────────────────────────────────

    public override string CommandText { get; set; } = string.Empty;
    public override int CommandTimeout { get; set; } = 30;
    public override CommandType CommandType { get; set; } = CommandType.Text;
    public override bool DesignTimeVisible { get; set; }
    public override UpdateRowSource UpdatedRowSource { get; set; }

    protected override DbConnection? DbConnection
    {
        get => _connection;
        set => _connection = (SqliteWasmConnection?)value;
    }

    protected override DbParameterCollection DbParameterCollection => _parameters;
    protected override DbTransaction? DbTransaction { get; set; }

    // ── Parameter helpers ──────────────────────────────────────────────

    public new SqliteWasmParameterCollection Parameters => _parameters;

    protected override DbParameter CreateDbParameter() => new SqliteWasmParameter();

    private string? SerializeParameters()
    {
        var dict = _parameters.ToDictionary();
        return dict == null ? null : JsonSerializer.Serialize(dict);
    }

    // ── Async execution (primary path) ─────────────────────────────────

    public override async Task<int> ExecuteNonQueryAsync(CancellationToken ct)
    {
        var connHandle = _connection!.ConnectionHandle;
        var result = await SqliteJsInterop.ExecuteAsync(connHandle, CommandText, SerializeParameters());
        var error = result.GetPropertyAsString("error");
        if (!string.IsNullOrEmpty(error))
            throw new Exception($"SQLite execute error: {error}");
        return result.GetPropertyAsInt32("changes");
    }

    public override async Task<object?> ExecuteScalarAsync(CancellationToken ct)
    {
        var connHandle = _connection!.ConnectionHandle;
        var json = await SqliteJsInterop.QueryJsonAsync(connHandle, CommandText, SerializeParameters());
        using var reader = SqliteWasmDbDataReader.FromJson(json);
        if (reader.Read() && reader.FieldCount > 0)
            return reader.GetValue(0);
        return null;
    }

    protected override async Task<DbDataReader> ExecuteDbDataReaderAsync(
        CommandBehavior behavior, CancellationToken ct)
    {
        var connHandle = _connection!.ConnectionHandle;
        var json = await SqliteJsInterop.QueryJsonAsync(connHandle, CommandText, SerializeParameters());
        return SqliteWasmDbDataReader.FromJson(json);
    }

    // ── Sync methods — not supported in WASM ───────────────────────────

    public override int ExecuteNonQuery() =>
        throw new NotSupportedException("Use ExecuteNonQueryAsync. Sync operations are not supported in WASM.");

    public override object? ExecuteScalar() =>
        throw new NotSupportedException("Use ExecuteScalarAsync. Sync operations are not supported in WASM.");

    protected override DbDataReader ExecuteDbDataReader(CommandBehavior behavior) =>
        throw new NotSupportedException("Use ExecuteReaderAsync. Sync operations are not supported in WASM.");

    public override void Cancel() { }
    public override void Prepare() { }
}
