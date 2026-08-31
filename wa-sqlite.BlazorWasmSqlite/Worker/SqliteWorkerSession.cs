using System;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Worker;

/// <summary>
/// The one database, and the two locks that make sharing it safe.
/// </summary>
/// <remarks>
/// <para>
/// There is exactly one SQLite database, in one Web Worker, behind one handle - the worker holds
/// <c>currentDb</c> in module scope and its close takes no argument. A connection object is
/// therefore a <b>handle onto this</b>, not a database of its own, which is why the state below
/// is shared rather than per-connection. The previous per-instance lock was adequate only while
/// an application held exactly one connection; under the conventional
/// <c>using var c = new SqliteWasmConnection(...)</c> per unit of work it guards nothing,
/// because every unit of work brings its own.
/// </para>
/// <para>
/// <b>Two locks, because they answer different questions.</b>
/// </para>
/// <list type="bullet">
/// <item><description>
/// <b>The lease</b> is what <c>OpenAsync</c> acquires and <c>Close</c>/<c>Dispose</c> release.
/// It answers "who may use the database right now", which is what lets a caller group several
/// statements without a transaction - and it is why the familiar ADO pattern means something
/// here instead of merely being tolerated.
/// </description></item>
/// <item><description>
/// <b>The I/O lock</b> answers "may two worker round-trips be in flight at once", and the answer
/// is never. One lease holder can still issue concurrent work - a component that fires two
/// Dapper queries without awaiting the first does exactly that - and the worker's
/// <c>self.onmessage</c> is an unserialised async handler, so overlapping calls interleave.
/// </description></item>
/// </list>
/// <para>
/// A transaction holds the I/O lock from BEGIN to COMMIT so nothing else can land inside it. On
/// a single global handle there is no such thing as "another connection's transaction": anything
/// that runs in between is part of it, and a rollback takes that work too.
/// </para>
/// </remarks>
internal sealed class SqliteWorkerSession
{
    private readonly SemaphoreSlim _lease = new(1, 1);
    private readonly SemaphoreSlim _io = new(1, 1);
    private Task<int>? _openTask;
    private bool _deleted;

    private const string DeletedMessage =
        "The database has been deleted. Reload the page before using it again — reopening now " +
        "would silently create a new empty one, because SQLite opens with SQLITE_OPEN_CREATE.";

    /// <summary>
    /// Marks the database gone, so later use fails loudly.
    /// </summary>
    /// <remarks>
    /// Without this the failure is silent and much worse than an exception: the worker opens
    /// with <c>SQLITE_OPEN_CREATE</c>, so a query after a delete does not error - it creates a
    /// fresh empty database and returns no rows. For an offline-first application that is a
    /// data-loss shape wearing the costume of a successful query.
    /// </remarks>
    public void MarkDeleted()
    {
        _deleted = true;
        _openTask = null;
    }

    private void ThrowIfDeleted()
    {
        if (_deleted) throw new InvalidOperationException(DeletedMessage);
    }

    public SqliteWorkerSession(ISqliteWorkerBridge bridge) => Bridge = bridge;

    public ISqliteWorkerBridge Bridge { get; }

    /// <summary>
    /// How long a caller waits for the lease before being told who is holding it. A leaked lease
    /// would otherwise hang the page forever, and "frozen" is the hardest bug report to act on.
    /// </summary>
    public TimeSpan LeaseTimeout { get; set; } = TimeSpan.FromSeconds(30);

    /// <summary>Take exclusive use of the database.</summary>
    public async Task AcquireLeaseAsync(CancellationToken ct)
    {
        ThrowIfDeleted();
        if (await _lease.WaitAsync(LeaseTimeout, ct).ConfigureAwait(false))
        {
            // Checked again on the way out: the delete may have completed while this caller was
            // queued behind it, which is exactly when a silent empty database would be created.
            try { ThrowIfDeleted(); }
            catch { _lease.Release(); throw; }
            return;
        }

        throw new TimeoutException(
            $"Timed out after {LeaseTimeout.TotalSeconds:0}s waiting for the SQLite connection. " +
            "Another connection is still open. There is a single shared database, so a " +
            "connection held for the lifetime of the application and connections created per " +
            "unit of work cannot be mixed - pick one.");
    }

    /// <summary>Give it back. Safe to call only by the holder.</summary>
    public void ReleaseLease() => _lease.Release();

    /// <summary>
    /// Open the database once, however many callers ask. The in-flight task is shared rather
    /// than the call repeated: a second <c>open</c> for a file the worker already has registers
    /// a second VFS under a name SQLite still holds, evicting the live one from the module's
    /// dispatch map - which surfaces as a property read on <c>undefined</c>.
    /// </summary>
    public Task<int> EnsureOpenAsync(string dbName, string fileName, Func<int, Task>? onFirstOpen = null) =>
        _openTask ??= OpenOnceAsync(dbName, fileName, onFirstOpen);

    private async Task<int> OpenOnceAsync(string dbName, string fileName, Func<int, Task>? onFirstOpen)
    {
        var handle = await Bridge.OpenAsync(dbName, fileName).ConfigureAwait(false);
        // Connection PRAGMAs belong to opening the database, not to taking the lease, so they
        // run inside the shared open task and exactly once.
        if (onFirstOpen is not null) await onFirstOpen(handle).ConfigureAwait(false);
        return handle;
    }

    /// <summary>Run one worker round-trip, with nothing else in flight.</summary>
    public async Task<T> RunExclusiveAsync<T>(Func<Task<T>> operation, CancellationToken ct)
    {
        ThrowIfDeleted();
        await _io.WaitAsync(ct).ConfigureAwait(false);
        try { return await operation().ConfigureAwait(false); }
        finally { _io.Release(); }
    }

    /// <summary>Hold the I/O lock across several round-trips - a transaction, and nothing else.</summary>
    public Task EnterExclusiveScopeAsync(CancellationToken ct) => _io.WaitAsync(ct);

    /// <summary>Release a scope taken by <see cref="EnterExclusiveScopeAsync"/>.</summary>
    public void ExitExclusiveScope() => _io.Release();

    /// <summary>Run a round-trip already inside an exclusive scope, without re-entering it.</summary>
    public static Task<T> RunInScopeAsync<T>(Func<Task<T>> operation) => operation();

    /// <summary>Forget the open database - used after the file is deleted.</summary>
    public void Invalidate() => _openTask = null;
}
