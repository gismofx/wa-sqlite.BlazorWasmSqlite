using System;
using System.Data;
using System.Data.Common;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// ADO.NET DbConnection backed by <see cref="SqliteJsInterop"/> and Web Worker.
/// Async-only — sync <see cref="Open"/> throws <see cref="NotSupportedException"/>.
/// </summary>
public sealed class SqliteWasmConnection : DbConnection
{
    private readonly string _dbName;
    private readonly string _fileName;
    private ConnectionState _state = ConnectionState.Closed;

    /// <summary>Connection handle returned by wa-sqlite open_v2.</summary>
    internal int ConnectionHandle { get; private set; }

    public SqliteWasmConnection(string dbName, string fileName)
    {
        _dbName = dbName;
        _fileName = fileName;
    }

    public SqliteWasmConnection(SqliteWasmConnectionStringBuilder builder)
        : this(builder.DatabaseName, builder.Filename) { }

    // ── Properties ─────────────────────────────────────────────────────

    public override string ConnectionString { get; set; } = string.Empty;
    public override string Database => _dbName;
    public override string DataSource => _fileName;
    public override string ServerVersion => "wa-sqlite";
    public override ConnectionState State => _state;

    // ── Async (primary path) ──────────────────────────────────────────

    public override async Task OpenAsync(CancellationToken cancellationToken)
    {
        if (_state == ConnectionState.Open) return;
        _state = ConnectionState.Connecting;
        ConnectionHandle = await SqliteJsInterop.OpenAsync(_dbName, _fileName);
        _state = ConnectionState.Open;
    }

    public override async Task CloseAsync()
    {
        if (_state == ConnectionState.Closed) return;
        await SqliteJsInterop.CloseAsync();
        _state = ConnectionState.Closed;
        ConnectionHandle = 0;
    }

    public override async ValueTask DisposeAsync()
    {
        if (_state != ConnectionState.Closed)
            await CloseAsync();
    }

    // ── Transaction ───────────────────────────────────────────────────

    protected override DbTransaction BeginDbTransaction(IsolationLevel isolationLevel) =>
        throw new NotSupportedException("Use BeginTransactionAsync.");

    public async Task<SqliteWasmTransaction> BeginTransactionAsync()
    {
        var txn = new SqliteWasmTransaction(this);
        await txn.BeginAsync();
        return txn;
    }

    // ── Command factory ───────────────────────────────────────────────

    protected override DbCommand CreateDbCommand() =>
        new SqliteWasmCommand { Connection = this };

    public new SqliteWasmCommand CreateCommand() =>
        new SqliteWasmCommand { Connection = this };

    // ── Sync — not supported in WASM ──────────────────────────────────

    public override void Open() =>
        throw new NotSupportedException("Use OpenAsync. Sync operations are not supported in WASM.");

    public override void Close() =>
        throw new NotSupportedException("Use CloseAsync. Sync operations are not supported in WASM.");

    public override void ChangeDatabase(string databaseName) =>
        throw new NotSupportedException();
}
