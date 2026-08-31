using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using wa_sqlite.BlazorWasmSqlite.Worker;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// A worker that records what it was asked to do, in what order, and how much of it was
/// happening at once.
/// </summary>
/// <remarks>
/// This is the point of <see cref="ISqliteWorkerBridge"/>. A race cannot be asserted against a
/// real browser — you can only observe that it sometimes happens. Here the test controls the
/// interleaving: <see cref="Delay"/> holds an operation open for as long as the test wants, and
/// <see cref="MaxConcurrent"/> records whether anything overlapped while it did.
/// </remarks>
internal sealed class FakeWorkerBridge : ISqliteWorkerBridge
{
    private int _inFlight;
    private int _nextHandle = 1;
    private readonly object _sync = new();

    /// <summary>Every operation, in the order it started. Ops carry their SQL where they have any.</summary>
    public ConcurrentQueue<string> Calls { get; } = new();

    /// <summary>How many operations were ever in flight simultaneously. Must be 1 under a gate.</summary>
    public int MaxConcurrent { get; private set; }

    /// <summary>Held open for this long inside every operation, so overlap is observable.</summary>
    public TimeSpan Delay { get; set; } = TimeSpan.FromMilliseconds(30);

    public int OpenCount => Calls.Count(c => c == "open");
    public int CloseCount => Calls.Count(c => c == "close");

    private async Task<T> RunAsync<T>(string label, Func<T> result)
    {
        Calls.Enqueue(label);
        var now = Interlocked.Increment(ref _inFlight);
        lock (_sync) { if (now > MaxConcurrent) MaxConcurrent = now; }
        try
        {
            await Task.Delay(Delay);
            return result();
        }
        finally
        {
            Interlocked.Decrement(ref _inFlight);
        }
    }

    public Task InitializeAsync() => RunAsync("init", () => 0);

    public Task<int> OpenAsync(string dbName, string fileName) =>
        RunAsync("open", () => _nextHandle++);

    public Task CloseAsync() => RunAsync("close", () => 0);

    public Task<WorkerExecuteResult> ExecuteAsync(int dbHandle, string sql, string? parametersJson) =>
        RunAsync($"execute:{sql}", () => new WorkerExecuteResult(1, null));

    public Task<string> QueryJsonAsync(int dbHandle, string sql, string? parametersJson) =>
        RunAsync($"query:{sql}", () => "{\"columns\":[\"n\"],\"rows\":[[1]]}");

    public Task<WorkerBulkResult> BulkInsertRawAsync(int dbHandle, string payload) =>
        RunAsync("bulk", () => new WorkerBulkResult(1, null));

    public Task<WorkerBulkResult> BulkInsertRawUpsertAsync(int dbHandle, string payload) =>
        RunAsync("bulkUpsert", () => new WorkerBulkResult(1, null));

    public Task<bool> CheckDatabaseExistsAsync(string fileName) => RunAsync("exists", () => true);

    public Task<bool> DeleteDatabaseAsync(string fileName) => RunAsync("delete", () => true);
}
