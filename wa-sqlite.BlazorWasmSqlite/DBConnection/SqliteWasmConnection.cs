using System;
using System.Data;
using System.Data.Common;
using System.Runtime.Versioning;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// ADO.NET DbConnection backed by <see cref="SqliteJsInterop"/> and Web Worker.
/// Async-only — sync <see cref="Open"/> throws <see cref="NotSupportedException"/>.
/// </summary>
[SupportedOSPlatform("browser")]
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

    /// <summary>
    /// The only route from this library into the Worker. See
    /// <see cref="Worker.ISqliteWorkerBridge"/> for why it exists and why it holds no lock.
    /// </summary>
    internal readonly Worker.ISqliteWorkerBridge Bridge;

    /// <summary>
    /// Initialises a connection to the SQLite database stored in IndexedDB.
    /// </summary>
    /// <param name="dbName">Logical database name passed to <c>sqlite3_open_v2</c>.</param>
    /// <param name="fileName">IndexedDB VFS file name — used as the IDB database key.</param>
    public SqliteWasmConnection(string dbName, string fileName)
        : this(dbName, fileName, new Worker.JsInteropWorkerBridge()) { }

    /// <summary>
    /// Test seam: the same connection over a substituted worker. Internal, and visible to the
    /// test assembly only — a fake bridge is what makes the concurrency behaviour assertable
    /// outside a browser.
    /// </summary>
    internal SqliteWasmConnection(string dbName, string fileName, Worker.ISqliteWorkerBridge bridge)
    {
        _dbName = dbName;
        _fileName = fileName;
        Bridge = bridge;
    }

    /// <summary>
    /// Initialises a connection using a <see cref="SqliteWasmConnectionStringBuilder"/>.
    /// </summary>
    public SqliteWasmConnection(SqliteWasmConnectionStringBuilder builder)
        : this(builder.DatabaseName, builder.Filename) { }

    // ── Properties ─────────────────────────────────────────────────────

#pragma warning disable CS8764 // Nullability of return type doesn't match overridden member
#pragma warning disable CS8765 // Nullability of parameter 'value' doesn't match overridden member
    /// <inheritdoc/>
    public override string ConnectionString { get; set; } = string.Empty;
#pragma warning restore CS8764
#pragma warning restore CS8765
    /// <inheritdoc/>
    public override string Database => _dbName;
    /// <inheritdoc/>
    public override string DataSource => _fileName;
    /// <inheritdoc/>
    public override string ServerVersion => "wa-sqlite";
    /// <inheritdoc/>
    public override ConnectionState State => _state;

    // ── Async (primary path) ──────────────────────────────────────────

    /// <summary>
    /// Opens the database connection via the Web Worker and sets foundational PRAGMAs.
    /// Safe to call multiple times — no-ops if already open.
    /// </summary>
    public override async Task OpenAsync(CancellationToken cancellationToken)
    {
        if (_state == ConnectionState.Open) return;
        _state = ConnectionState.Connecting;
        ConnectionHandle = await Bridge.OpenAsync(_dbName, _fileName);
        _state = ConnectionState.Open;

        // Set foundational connection pragmas. These are safe to set unconditionally:
        // - page_size: silently ignored if database already has data (only effective on first
        //   write of a new database). 8192 halves IDB round-trips vs the SQLite default of
        //   4096 for wide-row workloads (multiple TEXT columns per row).
        // - temp_store: keeps SQLite's internal temp B-trees and sort spills in memory rather
        //   than routing them through the async IDBBatchAtomicVFS. Standard best practice for
        //   all WASM SQLite deployments — temp data is ephemeral and has no durability requirement.
        await Bridge.ExecuteAsync(ConnectionHandle, "PRAGMA page_size=8192", null);
        await Bridge.ExecuteAsync(ConnectionHandle, "PRAGMA temp_store=MEMORY", null);
    }

    /// <summary>Closes the database and releases the IndexedDB VFS lock.</summary>
    public override async Task CloseAsync()
    {
        if (_state == ConnectionState.Closed) return;
        await Bridge.CloseAsync();
        _state = ConnectionState.Closed;
        ConnectionHandle = 0;
    }

    /// <summary>Closes the connection if open before disposing.</summary>
    public override async ValueTask DisposeAsync()
    {
        if (_state != ConnectionState.Closed)
            await CloseAsync();
    }

    // ── Transaction ───────────────────────────────────────────────────

    /// <inheritdoc/>
    protected override DbTransaction BeginDbTransaction(IsolationLevel isolationLevel) =>
        throw new NotSupportedException("Use BeginTransactionAsync.");

    /// <summary>
    /// Begins a SQLite transaction. Commit or roll back via the returned
    /// <see cref="SqliteWasmTransaction"/>.
    /// </summary>
    public async Task<SqliteWasmTransaction> BeginTransactionAsync()
    {
        var txn = new SqliteWasmTransaction(this);
        await txn.BeginAsync();
        return txn;
    }

    // ── Command factory ───────────────────────────────────────────────

    /// <inheritdoc/>
    protected override DbCommand CreateDbCommand() =>
        new SqliteWasmCommand { Connection = this };

    /// <summary>Creates a new <see cref="SqliteWasmCommand"/> bound to this connection.</summary>
    public new SqliteWasmCommand CreateCommand() =>
        new SqliteWasmCommand { Connection = this };

    // ── Sync — not supported in WASM ──────────────────────────────────

    /// <summary>Not supported. Use <see cref="OpenAsync(System.Threading.CancellationToken)"/>.</summary>
    public override void Open() =>
        throw new NotSupportedException("Use OpenAsync. Sync operations are not supported in WASM.");

    /// <summary>
    /// No-op — <see cref="SqliteWasmConnection"/> is long-lived.
    /// Dapper calls this after queries; passing an already-open connection suppresses it.
    /// Use <see cref="CloseAsync"/> to explicitly close.
    /// </summary>
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

    /// <inheritdoc/>
    public override void ChangeDatabase(string databaseName) =>
        throw new NotSupportedException();
}
