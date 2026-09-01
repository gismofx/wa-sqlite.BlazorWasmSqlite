using System.Runtime.Versioning;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.Worker;

/// <summary>
/// The real bridge: forwards to <see cref="SqliteJsInterop"/> and unwraps its <c>JSObject</c>
/// results into plain values.
/// </summary>
/// <remarks>
/// Deliberately contains no locking and no state. It is the only place in the library that
/// touches <c>JSObject</c>, which is what keeps every other type reachable from a test host.
/// </remarks>
[SupportedOSPlatform("browser")]
internal sealed class JsInteropWorkerBridge : ISqliteWorkerBridge
{
    /// <inheritdoc/>
    public Task InitializeAsync() => SqliteJsInterop.InitializeAsync();

    /// <inheritdoc/>
    public Task<int> OpenAsync(string dbName, string fileName) =>
        SqliteJsInterop.OpenAsync(dbName, fileName);

    /// <inheritdoc/>
    public Task CloseAsync() => SqliteJsInterop.CloseAsync();

    /// <inheritdoc/>
    public async Task<WorkerExecuteResult> ExecuteAsync(int dbHandle, string sql, string? parametersJson)
    {
        using var result = await SqliteJsInterop.ExecuteAsync(dbHandle, sql, parametersJson);
        if (result is null) return new WorkerExecuteResult(0, null);
        return new WorkerExecuteResult(
            result.GetPropertyAsInt32("changes"),
            result.GetPropertyAsString("error"));
    }

    /// <inheritdoc/>
    public Task<string> QueryJsonAsync(int dbHandle, string sql, string? parametersJson) =>
        SqliteJsInterop.QueryJsonAsync(dbHandle, sql, parametersJson);

    /// <inheritdoc/>
    public async Task<WorkerBulkResult> BulkInsertRawAsync(int dbHandle, string payload)
    {
        using var result = await SqliteJsInterop.BulkInsertRawAsync(dbHandle, payload);
        if (result is null) return new WorkerBulkResult(0, null);
        return new WorkerBulkResult(
            // GetPropertyAsDouble, not GetPropertyAsInt32: the worker returns a float64 and the
            // Int32 accessor silently yields 0 for one.
            result.GetPropertyAsDouble("totalChanges"),
            result.GetPropertyAsString("firstError"));
    }

    /// <inheritdoc/>
    public async Task<WorkerBulkResult> BulkInsertRawUpsertAsync(int dbHandle, string payload)
    {
        using var result = await SqliteJsInterop.BulkInsertRawUpsertAsync(dbHandle, payload);
        if (result is null) return new WorkerBulkResult(0, null);
        return new WorkerBulkResult(
            result.GetPropertyAsDouble("totalChanges"),
            result.GetPropertyAsString("firstError"));
    }

    /// <inheritdoc/>
    public Task<bool> CheckDatabaseExistsAsync(string fileName) =>
        SqliteJsInterop.CheckDatabaseExistsAsync(fileName);

    /// <inheritdoc/>
    public Task<bool> DeleteDatabaseAsync(string fileName) =>
        SqliteJsInterop.DeleteDatabaseAsync(fileName);
}
