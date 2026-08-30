using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Worker;

/// <summary>Outcome of a worker <c>execute</c> call.</summary>
internal readonly record struct WorkerExecuteResult(int Changes, string? Error);

/// <summary>Outcome of a worker bulk-insert call.</summary>
internal readonly record struct WorkerBulkResult(double TotalChanges, string? FirstError);

/// <summary>
/// Every call this library makes into the SQLite Web Worker, behind one interface.
/// </summary>
/// <remarks>
/// <para>
/// <b>Testability.</b> <see cref="SqliteJsInterop"/> is a static class of <c>[JSImport]</c>
/// partial methods. Those cannot bind outside a browser and cannot be substituted, so before
/// this interface existed no test could reach the connection, the command or the transaction at
/// all - the suite could only cover pure logic. A fake implementation lets a test record the
/// order calls arrive in and delay one on purpose, which is what turns "these can race" into an
/// assertion.
/// </para>
/// <para>
/// <b>One choke point.</b> Serialising access to a single database handle is only meaningful if
/// every path to the worker passes through the same gate. Before this, commands took a
/// semaphore while open, close, the transaction verbs and bulk insert did not, so a lifecycle
/// call could interleave with a running command by construction.
/// </para>
/// <para>
/// <b>The gate does NOT live here.</b> This interface is a dumb forwarder - no locking, no
/// state. The gate sits immediately above it, in the connection, precisely so that a fake
/// bridge still exercises the real gate. Putting the lock inside the implementation would mean
/// every concurrency test passed against a fake that has no lock, proving nothing about what
/// ships.
/// </para>
/// <para>
/// Results are plain CLR values rather than <c>JSObject</c> deliberately: a <c>JSObject</c>
/// cannot be constructed outside a browser, so returning one would make the interface
/// unfakeable and defeat the point.
/// </para>
/// </remarks>
internal interface ISqliteWorkerBridge
{
    /// <summary>Load the interop module. Safe to call repeatedly.</summary>
    Task InitializeAsync();

    /// <summary>Open the database and return its handle.</summary>
    Task<int> OpenAsync(string dbName, string fileName);

    /// <summary>Close the currently open database. Takes no handle - the worker holds one.</summary>
    Task CloseAsync();

    /// <summary>Run a non-query statement.</summary>
    Task<WorkerExecuteResult> ExecuteAsync(int dbHandle, string sql, string? parametersJson);

    /// <summary>Run a query and return the rows as JSON.</summary>
    Task<string> QueryJsonAsync(int dbHandle, string sql, string? parametersJson);

    /// <summary>Bulk insert from a raw payload (INSERT OR REPLACE).</summary>
    Task<WorkerBulkResult> BulkInsertRawAsync(int dbHandle, string payload);

    /// <summary>Bulk upsert from a raw payload (ON CONFLICT DO UPDATE).</summary>
    Task<WorkerBulkResult> BulkInsertRawUpsertAsync(int dbHandle, string payload);

    /// <summary>True when an IndexedDB database with this file name exists.</summary>
    Task<bool> CheckDatabaseExistsAsync(string fileName);

    /// <summary>Delete an IndexedDB database. Blocked unless the database is closed first.</summary>
    Task<bool> DeleteDatabaseAsync(string fileName);
}
