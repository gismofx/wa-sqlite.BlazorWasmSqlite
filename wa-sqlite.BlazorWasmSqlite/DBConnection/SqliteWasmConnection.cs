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
    /// The shared database and its two locks. Was a per-instance <c>SemaphoreSlim</c>, which
    /// guarded nothing once callers began creating a connection per unit of work — every unit of
    /// work brought its own lock to a database they all share. See
    /// <see cref="Worker.SqliteWorkerSession"/>.
    /// </summary>
    internal readonly Worker.SqliteWorkerSession Session;

    /// <summary>The only route from this library into the Worker.</summary>
    internal Worker.ISqliteWorkerBridge Bridge => Session.Bridge;

    /// <summary>
    /// Set while a transaction is open on this connection. Statements issued inside it must not
    /// re-enter the I/O lock the transaction is already holding, or the first one deadlocks
    /// against its own BEGIN.
    /// </summary>
    internal SqliteWasmTransaction? ActiveTransaction { get; set; }

    /// <summary>True while this connection holds the lease.</summary>
    private bool _holdsLease;

    /// <summary>
    /// Initialises a connection to the SQLite database stored in IndexedDB.
    /// </summary>
    /// <param name="dbName">Logical database name passed to <c>sqlite3_open_v2</c>.</param>
    /// <param name="fileName">IndexedDB VFS file name — used as the IDB database key.</param>
    public SqliteWasmConnection(string dbName, string fileName)
        : this(dbName, fileName, Worker.SqliteWorkerSessionRegistry.Default) { }

    /// <summary>
    /// Test seam: the same connection over a substituted worker, in a registry of its own so
    /// tests do not share state. Internal, and visible to the test assembly only — a fake bridge
    /// is what makes the concurrency behaviour assertable outside a browser.
    /// </summary>
    internal SqliteWasmConnection(string dbName, string fileName, Worker.ISqliteWorkerBridge bridge)
        : this(dbName, fileName, new Worker.SqliteWorkerSessionRegistry(() => bridge)) { }

    /// <summary>
    /// Test seam for behaviour that only appears when connections SHARE a registry — which is
    /// what the public constructor does. A per-connection session hides it entirely.
    /// </summary>
    internal SqliteWasmConnection(string dbName, string fileName, Worker.SqliteWorkerSessionRegistry registry)
        : this(dbName, fileName, registry.Get(dbName, fileName)) { }

    private SqliteWasmConnection(string dbName, string fileName, Worker.SqliteWorkerSession session)
    {
        _dbName = dbName;
        _fileName = fileName;
        Session = session;
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
        // Idempotent for this connection, and serialised across connections: OpenAsync acquires
        // the lease, so a second caller waits rather than issuing a second worker `open`.
        if (_holdsLease) return;

        _state = ConnectionState.Connecting;
        await Session.AcquireLeaseAsync(cancellationToken);
        _holdsLease = true;
        try
        {
            ConnectionHandle = await Session.EnsureOpenAsync(_dbName, _fileName, ApplyStartupPragmasAsync);
            _state = ConnectionState.Open;
        }
        catch
        {
            _holdsLease = false;
            _state = ConnectionState.Closed;
            Session.ReleaseLease();
            throw;
        }
    }

    private async Task ApplyStartupPragmasAsync(int handle)
    {
        // Set foundational connection pragmas. These are safe to set unconditionally:
        // - page_size: silently ignored if database already has data (only effective on first
        //   write of a new database). 8192 halves IDB round-trips vs the SQLite default of
        //   4096 for wide-row workloads (multiple TEXT columns per row).
        // - temp_store: keeps SQLite's internal temp B-trees and sort spills in memory rather
        //   than routing them through the async IDBBatchAtomicVFS. Standard best practice for
        //   all WASM SQLite deployments — temp data is ephemeral and has no durability requirement.
        await Bridge.ExecuteAsync(handle, "PRAGMA page_size=8192", null);
        await Bridge.ExecuteAsync(handle, "PRAGMA temp_store=MEMORY", null);
    }

    /// <summary>
    /// Releases exclusive use of the database. Does <b>not</b> close the database itself.
    /// </summary>
    /// <remarks>
    /// There is one database behind every connection, opened once and kept open for the life of
    /// the page, so closing it here would close it for everyone — which is the defect this
    /// release exists to remove. Tab close needs no cooperation: the VFS commits its IndexedDB
    /// transactions with strict durability inside SQLite's own sync, so anything committed is
    /// already durable and anything else was never promised. The database is closed only
    /// immediately before it is deleted, which the delete does for you.
    /// </remarks>
    public override Task CloseAsync()
    {
        Close();
        return Task.CompletedTask;
    }

    /// <summary>Releases the lease, like <see cref="CloseAsync"/>.</summary>
    public override ValueTask DisposeAsync()
    {
        Close();
        return default;
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
    /// Releases exclusive use of the database — the other half of <see cref="OpenAsync"/>.
    /// </summary>
    /// <remarks>
    /// This is the paired release for the lease that <see cref="OpenAsync"/> takes, which is why
    /// it is safe synchronously: releasing a semaphore does not wait on anything, and no worker
    /// round-trip is involved. It is also why Dapper's open-then-close around a query is now the
    /// intended mechanism rather than a hazard to warn about — the warning that used to be
    /// printed here was describing a real defect, and the defect is gone.
    /// </remarks>
    public override void Close()
    {
        if (!_holdsLease) return;
        _holdsLease = false;
        _state = ConnectionState.Closed;
        Session.ReleaseLease();
    }

    /// <inheritdoc/>
    public override void ChangeDatabase(string databaseName) =>
        throw new NotSupportedException();

    /// <summary>
    /// Deletes the IndexedDB database, closing it first. The only operation in this library that
    /// closes the database rather than merely releasing the lease.
    /// </summary>
    /// <remarks>
    /// <para>
    /// Runs under the lease, so it waits for whatever is in flight and nothing can start while
    /// it runs. Closing and deleting travel on different channels — the close goes through the
    /// worker, the delete is a main-thread IndexedDB call — and the window between them is
    /// precisely where another caller could reopen the file, so both happen inside one
    /// acquisition.
    /// </para>
    /// <para>
    /// Afterwards this session is marked deleted and every later use throws. That is not
    /// defensiveness: the worker opens with <c>SQLITE_OPEN_CREATE</c>, so a query after a delete
    /// would otherwise succeed against a brand-new empty database and return no rows. Reload the
    /// page — which is what a wipe does anyway.
    /// </para>
    /// </remarks>
    /// <param name="fileName">IndexedDB database name, as passed to the constructor.</param>
    /// <param name="ct">Cancels waiting for the lease, not the delete itself.</param>
    public async Task DeleteDatabaseAsync(string fileName, CancellationToken ct = default)
    {
        var tookLease = !_holdsLease;
        // Deliberately the delete-flavoured acquisition: an application removing more than one
        // database deletes them in sequence, and the first must not brick the second.
        if (tookLease) await Session.AcquireLeaseForDeleteAsync(ct);
        try
        {
            // Both locks, and both are needed. The lease keeps other connections out; the I/O
            // lock keeps THIS connection's own in-flight work out, which the lease cannot do
            // because the caller deleting the database is usually already holding it.
            await Session.RunForDeleteAsync(() => Bridge.DeleteDatabaseAsync(fileName), ct);
            Session.MarkDeleted();
            _state = ConnectionState.Closed;
            ConnectionHandle = 0;
        }
        finally
        {
            if (tookLease || _holdsLease)
            {
                _holdsLease = false;
                Session.ReleaseLease();
            }
        }
    }
}
