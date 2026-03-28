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
    [JSImport("executeBatch", ModuleName)]
    internal static partial Task<JSObject> ExecuteBatchAsync(
        int dbConn, string batchJson);
}
