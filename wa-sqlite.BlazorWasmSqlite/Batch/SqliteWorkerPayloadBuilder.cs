using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Versioning;
using System.Text;
using System.Text.Json;

namespace wa_sqlite.BlazorWasmSqlite.Batch;

/// <summary>
/// Builds <c>\0</c>-delimited payloads for dispatch to the wa-sqlite Web Worker.
/// All active paths use the raw payload format, which eliminates intermediate
/// JSON re-serialization in C# and lets the Worker parse row data at V8 speed.
/// </summary>
/// <remarks>
/// <para>
/// The payload format is a null-character-delimited string:
/// <c>table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0colN\0line1\0line2\0...</c>
/// </para>
/// <para>
/// Use <see cref="BuildRawPayload"/> for seed streaming (NDJSON lines from server).
/// Use <see cref="BuildUpsertPayload{T}"/> for typed entity upserts (incremental sync).
/// </para>
/// </remarks>
[SupportedOSPlatform("browser")]
public static class SqliteWorkerPayloadBuilder
{

    /// <summary>
    /// Pool of reusable <see cref="StringBuilder"/> instances.
    /// Avoids large LOH allocations when bundles contain 500+ rows × N columns.
    /// Builders larger than 4 MB are not returned to the pool.
    /// </summary>
    private static readonly ConcurrentBag<StringBuilder> SbPool = new();

    /// <summary>
    /// Column name cache keyed by entity type.
    /// Populated on first call per type when no custom <see cref="JsonSerializerOptions"/> are provided.
    /// Eliminates <see cref="JsonDocument.Parse"/> overhead on every upsert call — critical for
    /// single-record upserts that would otherwise pay full parse cost on every operation.
    /// </summary>
    /// <remarks>
    /// Only populated when <c>options</c> is <c>null</c> (the default case).
    /// Calls with custom options bypass the cache because <see cref="JsonSerializerOptions"/>
    /// does not implement value equality, making it unsuitable as a composite cache key.
    /// </remarks>
    private static readonly ConcurrentDictionary<Type, string[]> ColumnCache = new();

    /// <summary>
    /// Builds a <c>\0</c>-delimited payload from raw NDJSON seed stream lines.
    /// Used by <see cref="SqliteJsInterop.BulkInsertRawAsync"/> for initial seeding
    /// (<c>INSERT OR REPLACE INTO</c> — fastest path for empty tables).
    /// </summary>
    /// <remarks>
    /// Column names are extracted from the first line in <paramref name="rawLines"/>.
    /// Lines may be either <c>"row"</c> type (single data object) or
    /// <c>"rows"</c> type (bundled array) — the Worker handles both formats natively.
    /// </remarks>
    /// <param name="tableName">Target SQLite table name.</param>
    /// <param name="rawLines">
    /// Raw NDJSON lines as received from the seed stream.
    /// Each line must be a complete JSON object containing a <c>data</c> or <c>rows</c> property.
    /// </param>
    /// <param name="rowsPerStatement">Number of rows per INSERT statement (default 100).</param>
    /// <param name="primaryKey">Primary key column name (default <c>"Id"</c>).</param>
    /// <returns>
    /// <c>\0</c>-delimited payload string ready to pass to
    /// <see cref="SqliteJsInterop.BulkInsertRawAsync"/>.
    /// </returns>
    public static string BuildRawPayload(
        string tableName,
        IReadOnlyList<string> rawLines,
        int rowsPerStatement = 100,
        string primaryKey = "Id")
    {
        if (rawLines.Count == 0)
            return $"{tableName}\0{primaryKey}\0{rowsPerStatement}\00\0";

        // Extract column names from the first line — detect "row" vs "rows" bundle format
        string[] columns;
        using (var doc = JsonDocument.Parse(rawLines[0]))
        {
            var root = doc.RootElement;
            var dataEl = root.TryGetProperty("data", out var d)
                ? d
                : root.GetProperty("rows")[0]; // rows bundle — use first element for schema
            var colList = new List<string>();
            foreach (var prop in dataEl.EnumerateObject()) colList.Add(prop.Name);
            columns = colList.ToArray();
        }

        return BuildPayload(tableName, primaryKey, rowsPerStatement, columns, rawLines);
    }


    /// <summary>
    /// Builds a <c>\0</c>-delimited payload from typed entity instances.
    /// Used by <see cref="SqliteJsInterop.BulkInsertRawUpsertAsync"/> for incremental sync
    /// (<c>INSERT INTO ... ON CONFLICT DO UPDATE SET</c> — preserves existing row data).
    /// </summary>
    /// <remarks>
    /// <para>
    /// Each entity is serialized to a plain JSON object string via
    /// <see cref="JsonSerializer.Serialize{T}(T, JsonSerializerOptions?)"/>.
    /// No NDJSON envelope is required — the Worker reads each line as a raw object.
    /// </para>
    /// <para>
    /// Column names are derived from the JSON property names of the first entity.
    /// Ensure <typeparamref name="T"/> serializes consistently (consider
    /// <see cref="System.Text.Json.Serialization.JsonPropertyNameAttribute"/> if needed).
    /// </para>
    /// </remarks>
    /// <typeparam name="T">Entity type. Must serialize to a flat JSON object.</typeparam>
    /// <param name="tableName">Target SQLite table name.</param>
    /// <param name="records">Entities to upsert. Must be non-empty.</param>
    /// <param name="primaryKey">Primary key column name (default <c>"Id"</c>).</param>
    /// <param name="rowsPerStatement">Number of rows per INSERT statement (default 100).</param>
    /// <param name="options">Optional JSON serializer options.</param>
    /// <returns>
    /// <c>\0</c>-delimited payload string ready to pass to
    /// <see cref="SqliteJsInterop.BulkInsertRawUpsertAsync"/>.
    /// </returns>
    /// <exception cref="ArgumentException">Thrown when <paramref name="records"/> is empty.</exception>
    public static string BuildUpsertPayload<T>(
        string tableName,
        IEnumerable<T> records,
        string primaryKey = "Id",
        int rowsPerStatement = 100,
        JsonSerializerOptions? options = null)
    {
        var list = records as IReadOnlyList<T> ?? records.ToList();
        if (list.Count == 0)
            throw new ArgumentException("records must be non-empty.", nameof(records));

        // Serialize all entities first — unavoidable per-call cost.
        var lines = new List<string>(list.Count);
        foreach (var entity in list)
            lines.Add(JsonSerializer.Serialize(entity, options));

        // Column discovery: use cache when options == null (common case).
        // JsonSerializerOptions lacks value equality so cannot be used as a composite key.
        // Custom-options callers pay the JsonDocument.Parse cost on every call — acceptable
        // since custom options are rare and the caller has opted into non-default behaviour.
        string[] columns;
        if (options == null)
        {
            columns = ColumnCache.GetOrAdd(typeof(T), _ =>
            {
                using var doc = JsonDocument.Parse(lines[0]);
                return doc.RootElement.EnumerateObject()
                    .Select(p => p.Name)
                    .ToArray();
            });
        }
        else
        {
            using var doc = JsonDocument.Parse(lines[0]);
            columns = doc.RootElement.EnumerateObject()
                .Select(p => p.Name)
                .ToArray();
        }

        return BuildPayload(tableName, primaryKey, rowsPerStatement, columns, lines);
    }


    /// <summary>
    /// Core payload builder — shared by <see cref="BuildRawPayload"/> and
    /// <see cref="BuildUpsertPayload{T}"/>.
    /// Rents a <see cref="StringBuilder"/> from the pool to avoid LOH allocations.
    /// </summary>
    private static string BuildPayload(
        string tableName,
        string primaryKey,
        int rowsPerStatement,
        string[] columns,
        IReadOnlyList<string> lines)
    {
        if (!SbPool.TryTake(out var sb))
            sb = new StringBuilder(lines.Count * 200 + 256);
        else
            sb.Clear();

        try
        {
            sb.Append(tableName);        sb.Append('\0');
            sb.Append(primaryKey);       sb.Append('\0');
            sb.Append(rowsPerStatement); sb.Append('\0');
            sb.Append(columns.Length);   sb.Append('\0');
            foreach (var col in columns) { sb.Append(col); sb.Append('\0'); }
            foreach (var line in lines)  { sb.Append(line); sb.Append('\0'); }
            return sb.ToString();
        }
        finally
        {
            if (sb.Capacity <= 4 * 1024 * 1024) // don't pool oversized builders (>4 MB)
                SbPool.Add(sb);
        }
    }


    // ── Obsolete methods — superseded by BuildRawPayload / BuildUpsertPayload ──

    /// <summary>
    /// [Obsolete] Builds a JSON batch string for the <c>executeBatch</c> Worker handler.
    /// Uses named parameter objects per statement — higher per-row overhead than the raw path.
    /// </summary>
    /// <remarks>
    /// Use <see cref="BuildUpsertPayload{T}"/> with
    /// <see cref="SqliteJsInterop.BulkInsertRawUpsertAsync"/> instead.
    /// </remarks>
    [Obsolete("Use BuildUpsertPayload<T> with BulkInsertRawUpsertAsync instead. Build() produces higher per-row overhead via named parameter JSON.", error: true)]
    public static string Build(
        string tableName,
        List<string> columns,
        IReadOnlyList<Dictionary<string, object?>> rows,
        int rowsPerStatement = 100,
        string primaryKey = "Id")
        => throw new NotSupportedException("Build() is obsolete. Use BuildUpsertPayload<T>.");

    /// <summary>
    /// [Obsolete] Builds the compact array-of-arrays JSON payload for the <c>bulkInsert</c> Worker handler.
    /// Requires intermediate <c>Dictionary&lt;string, object?&gt;</c> deserialization in C#.
    /// </summary>
    /// <remarks>
    /// Use <see cref="BuildUpsertPayload{T}"/> with
    /// <see cref="SqliteJsInterop.BulkInsertRawUpsertAsync"/> instead.
    /// </remarks>
    [Obsolete("Use BuildUpsertPayload<T> with BulkInsertRawUpsertAsync instead. BuildBulkPayload() requires unnecessary Dictionary deserialization.", error: true)]
    public static string BuildBulkPayload(
        string tableName,
        List<string> columns,
        IReadOnlyList<Dictionary<string, object?>> rows,
        int rowsPerStatement = 100,
        string primaryKey = "Id")
        => throw new NotSupportedException("BuildBulkPayload() is obsolete. Use BuildUpsertPayload<T>.");
}
