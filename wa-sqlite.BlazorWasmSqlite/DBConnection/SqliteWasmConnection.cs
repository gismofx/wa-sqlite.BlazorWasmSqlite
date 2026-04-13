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
    public int ConnectionHandle { get; private set; }

    /// <summary>
    /// Serializes all Worker round-trips through a single async gate.
    /// The Worker is sequential but the C# side can fire multiple concurrent
    /// awaits (e.g. page-load queries), causing responses to be delivered to
    /// the wrong awaiter and producing corrupt-looking JSON / SQLITE_CORRUPT errors.
    /// </summary>
    internal readonly SemaphoreSlim WorkerLock = new SemaphoreSlim(1, 1);

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

        // Set foundational connection pragmas. These are safe to set unconditionally:
        // - page_size: silently ignored if database already has data (only effective on first
        //   write of a new database). 8192 halves IDB round-trips vs the SQLite default of
        //   4096 for wide-row workloads (multiple TEXT columns per row).
        // - temp_store: keeps SQLite's internal temp B-trees and sort spills in memory rather
        //   than routing them through the async IDBBatchAtomicVFS. Standard best practice for
        //   all WASM SQLite deployments — temp data is ephemeral and has no durability requirement.
        await SqliteJsInterop.ExecuteAsync(ConnectionHandle, "PRAGMA page_size=8192", null);
        await SqliteJsInterop.ExecuteAsync(ConnectionHandle, "PRAGMA temp_store=MEMORY", null);
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

    public override void Close()
    {
        // Dapper calls sync Close() after queries when it opened the connection.
        // SqliteWasmConnection is a singleton that must stay open — ignore the close
        // but warn so callers know this happened (e.g. pass connection pre-opened
        // to Dapper to suppress this path entirely).
        Console.WriteLine("[wa-sqlite] WARNING: SqliteWasmConnection.Close() called synchronously. " +
                          "This is a no-op in WASM. Ensure the connection is already Open before " +
                          "passing it to Dapper to avoid this call.");
    }

    public override void ChangeDatabase(string databaseName) =>
        throw new NotSupportedException();
}
