using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// High-performance JS interop for wa-sqlite via [JSImport].
/// Bypasses IJSRuntime dispatcher and JSON overhead.
/// Requires module loaded via <see cref="InitializeAsync"/>.
/// </summary>
[SupportedOSPlatform("browser")]
public static partial class SqliteJsInterop
{
    private const string ModuleName = "sqlite-interop";
    private static bool _initialized;

    /// <summary>
    /// Load the JS interop module. Call once at startup.
    /// Safe to call multiple times (no-op after first).
    /// </summary>
    public static async Task InitializeAsync()
    {
        if (_initialized) return;
        await JSHost.ImportAsync(
            ModuleName,
            "/_content/wa-sqlite.BlazorWasmSqlite/sqlite-interop.js");
        _initialized = true;
    }

    // ── JSImport declarations ─────────────────────────────────────────

    /// <summary>Initialize the Worker bridge.</summary>
    [JSImport("init", ModuleName)]
    public static partial Task InitWorkerAsync();

    /// <summary>Open the database.</summary>
    [JSImport("open", ModuleName)]
    public static partial Task<int> OpenAsync(string dbName, string fileName);

    /// <summary>Close the database.</summary>
    [JSImport("close", ModuleName)]
    public static partial Task CloseAsync();

    /// <summary>
    /// Execute a non-query SQL statement.
    /// Returns a JSObject with properties: changes (int), error (string).
    /// </summary>
    [JSImport("execute", ModuleName)]
    public static partial Task<JSObject> ExecuteAsync(
        int dbConn, string sql, string? paramsJson);

    /// <summary>
    /// Execute a SQL query. Returns a JSObject with properties: data (array), error (string).
    /// Use for small result sets where JSObject property access is acceptable.
    /// </summary>
    [JSImport("query", ModuleName)]
    public static partial Task<JSObject> QueryAsync(
        int dbConn, string sql, string? paramsJson);

    /// <summary>
    /// Execute a query and return results as a JSON string.
    /// Faster for large result sets — single string marshal instead of
    /// per-row JSObject property access.
    /// </summary>
    [JSImport("queryJson", ModuleName)]
    public static partial Task<string> QueryJsonAsync(
        int dbConn, string sql, string? paramsJson);

    /// <summary>
    /// Execute a batch of SQL statements in a single interop round-trip.
    /// Returns a JSObject with properties: results (array), totalChanges (int).
    /// </summary>
    /// <remarks>
    /// <b>Obsolete.</b> Use <see cref="BulkInsertRawAsync"/> or <see cref="BulkInsertRawUpsertAsync"/>
    /// with payloads built by <see cref="Batch.SqliteWorkerPayloadBuilder"/> instead.
    /// Those paths eliminate per-statement JSON overhead entirely.
    /// </remarks>
    [Obsolete("Use BulkInsertRawAsync / BulkInsertRawUpsertAsync with SqliteWorkerPayloadBuilder. ExecuteBatchAsync has higher per-row overhead.", error: true)]
    public static Task<JSObject> ExecuteBatchAsync(int dbConn, string batchJson)
        => throw new NotSupportedException("ExecuteBatchAsync is obsolete. The backing JS function has been removed.");

    /// <summary>
    /// Bulk INSERT via compact array-of-arrays payload.
    /// JS builds SQL and params at V8 speed — C# only serializes row values.
    /// Uses INSERT INTO ... ON CONFLICT(primaryKey) DO UPDATE SET for safe upsert semantics.
    /// Returns a JSObject with properties: totalChanges (int), errors (array).
    /// </summary>
    /// <remarks>
    /// <b>Obsolete.</b> Use <see cref="BulkInsertRawUpsertAsync"/> with a payload built by
    /// <see cref="Batch.SqliteWorkerPayloadBuilder.BuildUpsertPayload{T}"/> instead.
    /// The raw path eliminates the intermediate array-of-arrays JSON representation.
    /// </remarks>
    [Obsolete("Use BulkInsertRawUpsertAsync with SqliteWorkerPayloadBuilder.BuildUpsertPayload instead. BulkInsertAsync requires unnecessary intermediate serialization.", error: true)]
    public static Task<JSObject> BulkInsertAsync(int dbConn, string payloadJson)
        => throw new NotSupportedException("BulkInsertAsync is obsolete. The backing JS function has been removed.");

    /// <summary>
    /// Bulk INSERT from a <c>\0</c>-delimited raw payload — zero C# re-serialization.
    /// Uses <c>INSERT OR REPLACE INTO</c> — fastest path for seeding into empty tables.
    /// Does not perform an index lookup; existing row data is not preserved on conflict.
    /// Use for initial seeding only. For incremental sync, use <see cref="BulkInsertRawUpsertAsync"/>.
    /// </summary>
    /// <param name="dbConn">Connection handle returned by <see cref="OpenAsync"/>.</param>
    /// <param name="payload">
    /// <c>\0</c>-delimited payload built by <see cref="Batch.SqliteWorkerPayloadBuilder.BuildRawPayload"/>.
    /// Format: <c>table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0line1\0line2\0...</c>
    /// </param>
    /// <returns>
    /// JSObject with <c>totalChanges</c> (float64) and <c>errors</c> (array) properties.
    /// Use <c>GetPropertyAsDouble("totalChanges")</c> — <c>GetPropertyAsInt32</c> silently returns 0 for float64.
    /// </returns>
    [JSImport("bulkInsertRaw", ModuleName)]
    public static partial Task<JSObject> BulkInsertRawAsync(
        int dbConn, string payload);

    /// <summary>
    /// Bulk UPSERT from a <c>\0</c>-delimited raw payload — zero C# re-serialization.
    /// Uses <c>INSERT INTO ... ON CONFLICT(pk) DO UPDATE SET</c> — preserves existing row data
    /// for non-conflicting columns. Use for incremental sync where rows may already exist.
    /// For initial seeding into empty tables, use <see cref="BulkInsertRawAsync"/> instead.
    /// </summary>
    /// <param name="dbConn">Connection handle returned by <see cref="OpenAsync"/>.</param>
    /// <param name="payload">
    /// <c>\0</c>-delimited payload built by <see cref="Batch.SqliteWorkerPayloadBuilder.BuildRawPayload"/>
    /// or <see cref="Batch.SqliteWorkerPayloadBuilder.BuildUpsertPayload{T}"/>.
    /// Format: <c>table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0line1\0line2\0...</c>
    /// </param>
    /// <returns>
    /// JSObject with <c>totalChanges</c> (float64) and <c>errors</c> (array) properties.
    /// Use <c>GetPropertyAsDouble("totalChanges")</c> — <c>GetPropertyAsInt32</c> silently returns 0 for float64.
    /// </returns>
    [JSImport("bulkInsertRawUpsert", ModuleName)]
    public static partial Task<JSObject> BulkInsertRawUpsertAsync(
        int dbConn, string payload);

    /// <summary>
    /// Delete an IndexedDB database by name.
    /// Does NOT go through the Worker — this is a browser-level IDB operation.
    /// The caller must close any open <see cref="DBConnection.SqliteWasmConnection"/>
    /// for this fileName before calling, or the delete will be blocked.
    /// After deletion, clear any local version flags (e.g. LocalStorage) and reload.
    /// </summary>
    /// <param name="fileName">IDB database name — the same fileName passed to <see cref="OpenAsync"/>.</param>
    [JSImport("deleteDatabase", ModuleName)]
    public static partial Task<bool> DeleteDatabaseAsync(string fileName);
}
