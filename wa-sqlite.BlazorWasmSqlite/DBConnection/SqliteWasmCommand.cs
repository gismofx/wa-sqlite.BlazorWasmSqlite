using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Runtime.Versioning;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// DbCommand implementation backed by <see cref="SqliteJsInterop"/>.
/// Async-only — sync methods throw <see cref="NotSupportedException"/>.
/// </summary>
[SupportedOSPlatform("browser")]
public sealed class SqliteWasmCommand : DbCommand
{
    private readonly SqliteWasmParameterCollection _parameters = new();
    private SqliteWasmConnection? _connection;

    /// <summary>Initialises a command with no text or connection.</summary>
    public SqliteWasmCommand() { }

    /// <summary>Initialises a command with the given SQL text.</summary>
    public SqliteWasmCommand(string commandText)
    {
        CommandText = commandText;
    }

    /// <summary>Initialises a command with the given SQL text and connection.</summary>
    public SqliteWasmCommand(string commandText, SqliteWasmConnection connection)
    {
        CommandText = commandText;
        _connection = connection;
    }

    // ── Properties ─────────────────────────────────────────────────────

#pragma warning disable CS8764 // Nullability of return type doesn't match overridden member
#pragma warning disable CS8765 // Nullability of parameter 'value' doesn't match overridden member
    /// <inheritdoc/>
    public override string CommandText { get; set; } = string.Empty;
#pragma warning restore CS8764
#pragma warning restore CS8765
    /// <inheritdoc/>
    public override int CommandTimeout { get; set; } = 30;
    /// <inheritdoc/>
    public override CommandType CommandType { get; set; } = CommandType.Text;
    /// <inheritdoc/>
    public override bool DesignTimeVisible { get; set; }
    /// <inheritdoc/>
    public override UpdateRowSource UpdatedRowSource { get; set; }

    /// <inheritdoc/>
    protected override DbConnection? DbConnection
    {
        get => _connection;
        set => _connection = (SqliteWasmConnection?)value;
    }

    /// <inheritdoc/>
    protected override DbParameterCollection DbParameterCollection => _parameters;
    /// <inheritdoc/>
    protected override DbTransaction? DbTransaction { get; set; }

    // ── Parameter helpers ──────────────────────────────────────────────

    /// <summary>Typed access to the parameter collection.</summary>
    public new SqliteWasmParameterCollection Parameters => _parameters;

    /// <inheritdoc/>
    protected override DbParameter CreateDbParameter() => new SqliteWasmParameter();

    private string? SerializeParameters()
    {
        var dict = _parameters.ToDictionary();
        if (dict == null) return null;

        // Build a positional JSON array ordered by each named parameter's first appearance
        // in the SQL. Uses a tokenizing scanner that skips string literals and comments,
        // so '@' inside 'user@example.com' or -- comments is never misread as a parameter.
        // wa-sqlite bind_collection(stmt, array) binds positionally by 1-based index, which
        // matches SQLite's sequential index assignment for named parameters (@name, :name, $name).
        var paramNames = _paramNameCache.GetOrAdd(CommandText, ScanParameterNames);
        var ordered = new List<object?>(paramNames.Count);
        foreach (var name in paramNames)
        {
            dict.TryGetValue(name, out var raw);                          // try "@name"
            if (raw == null) dict.TryGetValue(name.Substring(1), out raw); // try "name"
            ordered.Add(Coerce(raw));
        }

        // Fallback: no named params found (e.g. pure positional ? SQL) — coerce all values
        if (ordered.Count == 0)
            ordered.AddRange(dict.Values.Select(Coerce));

        return JsonSerializer.Serialize(ordered);
    }

    /// <summary>
    /// Cache of SQL → parameter name list. Populated on first execution of each distinct query.
    /// Key: SQL string. Value: ordered, deduplicated list of parameter names as they appear in SQL.
    /// ConcurrentDictionary used for thread-safety; WASM is single-threaded but this is zero cost.
    /// </summary>
    private static readonly ConcurrentDictionary<string, List<string>> _paramNameCache = new();

    /// <summary>
    /// Tokenizing scanner that extracts named parameter sigils (@name, :name, $name) from SQL
    /// in first-appearance order, skipping string literals, quoted identifiers, and comments.
    /// Deduplicates repeated occurrences of the same parameter (SQLite shares one binding slot).
    /// </summary>
    private static List<string> ScanParameterNames(string sql)
    {
        var result = new List<string>();
        var seen   = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
        int i = 0, len = sql.Length;

        while (i < len)
        {
            char c = sql[i];

            // -- single-line comment: skip to end of line
            if (c == '-' && i + 1 < len && sql[i + 1] == '-')
            {
                while (i < len && sql[i] != '\n') i++;
                continue;
            }

            // /* block comment */
            if (c == '/' && i + 1 < len && sql[i + 1] == '*')
            {
                i += 2;
                while (i + 1 < len && !(sql[i] == '*' && sql[i + 1] == '/')) i++;
                i += 2; // consume */
                continue;
            }

            // 'single-quoted string' — SQLite uses '' to escape a quote inside
            if (c == '\'')
            {
                i++;
                while (i < len)
                {
                    if (sql[i] == '\'') { i++; if (i < len && sql[i] == '\'') i++; else break; }
                    else i++;
                }
                continue;
            }

            // "double-quoted identifier" or `backtick identifier`
            if (c == '"' || c == '`')
            {
                char close = c; i++;
                while (i < len && sql[i] != close) i++;
                if (i < len) i++;
                continue;
            }

            // Named parameter: @name  :name  $name
            // Next char must be a letter or underscore (not a bare @ or @@)
            if ((c == '@' || c == ':' || c == '$') &&
                i + 1 < len &&
                (char.IsLetter(sql[i + 1]) || sql[i + 1] == '_'))
            {
                int start = i++;
                while (i < len && (char.IsLetterOrDigit(sql[i]) || sql[i] == '_')) i++;
                var name = sql.Substring(start, i - start);
                if (seen.Add(name)) result.Add(name);
                continue;
            }

            i++;
        }

        return result;
    }

    /// <summary>
    /// Converts a parameter value to a JSON-serializable form for the wa-sqlite JS worker.
    /// This is the production serialization path for all query parameters — Dapper's type
    /// handler SetValue is bypassed for built-in types (DateTime, bool) because SqliteWasmParameter
    /// holds the raw CLR value, which flows directly here.
    ///
    /// DateTime: serialized as sortable ISO 8601 ("s" format, no timezone suffix) — identical
    /// to what DateTimeHandler.SetValue writes, ensuring parameter/stored-value format consistency
    /// and correct lexicographic date-range query results.
    ///
    /// Internal (not private) to allow direct unit testing via InternalsVisibleTo.
    /// </summary>
    internal static object? Coerce(object? value)
    {
        if (value is null || value is DBNull) return null;
        if (value is bool b)             return b ? 1 : 0;
        if (value is DateTime dt)        return dt.ToString("s");
        if (value is DateTimeOffset dto) return dto.ToUniversalTime().ToString("s") + "Z";
        return value;
    }

    // ── Async execution (primary path) ─────────────────────────────────

    /// <inheritdoc/>
    public override Task<int> ExecuteNonQueryAsync(CancellationToken ct) =>
        RunAsync(async () =>
        {
            var result = await _connection!.Bridge.ExecuteAsync(
                _connection!.ConnectionHandle, CommandText, SerializeParameters());
            if (!string.IsNullOrEmpty(result.Error))
                throw new Exception($"SQLite execute error: {result.Error} | SQL: {CommandText.Trim()}");
            return result.Changes;
        }, ct);

    /// <summary>
    /// Runs one worker round-trip with nothing else in flight.
    /// </summary>
    /// <remarks>
    /// <para>
    /// A statement issued inside a transaction must NOT re-enter the I/O lock: the transaction
    /// holds it from BEGIN to COMMIT, so re-entering would deadlock the first INSERT against its
    /// own BEGIN. Reusing the scope is what makes "a transaction excludes other callers" and "a
    /// transaction can do work" both true at once.
    /// </para>
    /// <para>
    /// Membership is decided by <b>this command's own transaction</b>, not by whether the
    /// connection happens to have one open. That distinction is the whole point: a connection
    /// shared across an application has many callers, and a query from an unrelated one must
    /// queue rather than silently join a transaction it knows nothing about and lose its work to
    /// that transaction's rollback. It is also the conventional ADO rule - Dapper sets
    /// <c>Transaction</c> on the command exactly when the caller passes one.
    /// </para>
    /// </remarks>
    private Task<T> RunAsync<T>(Func<Task<T>> operation, CancellationToken ct) =>
        Transaction is SqliteWasmTransaction
            ? operation()
            : _connection!.Session.RunExclusiveAsync(operation, ct);

    /// <inheritdoc/>
    public override Task<object?> ExecuteScalarAsync(CancellationToken ct) =>
        RunAsync(async () =>
        {
            var json = await _connection!.Bridge.QueryJsonAsync(
                _connection!.ConnectionHandle, CommandText, SerializeParameters());
            try
            {
                using var reader = SqliteWasmDbDataReader.FromJson(json);
                if (reader.Read() && reader.FieldCount > 0)
                    return reader.GetValue(0);
                return (object?)null;
            }
            catch (Exception ex)
            {
                throw new Exception($"{ex.Message} | SQL: {CommandText.Trim()}", ex);
            }
        }, ct);

    /// <inheritdoc/>
    protected override Task<DbDataReader> ExecuteDbDataReaderAsync(
        CommandBehavior behavior, CancellationToken ct) =>
        RunAsync(async () =>
        {
            var json = await _connection!.Bridge.QueryJsonAsync(
                _connection!.ConnectionHandle, CommandText, SerializeParameters());
            try
            {
                return (DbDataReader)SqliteWasmDbDataReader.FromJson(json);
            }
            catch (Exception ex)
            {
                throw new Exception($"{ex.Message} | SQL: {CommandText.Trim()}", ex);
            }
        }, ct);

    // ── Sync methods — not supported in WASM ───────────────────────────

    /// <summary>Not supported. Use <see cref="ExecuteNonQueryAsync(System.Threading.CancellationToken)"/>.</summary>
    public override int ExecuteNonQuery() =>
        throw new NotSupportedException("Use ExecuteNonQueryAsync. Sync operations are not supported in WASM.");

    /// <summary>Not supported. Use <see cref="ExecuteScalarAsync(System.Threading.CancellationToken)"/>.</summary>
    public override object? ExecuteScalar() =>
        throw new NotSupportedException("Use ExecuteScalarAsync. Sync operations are not supported in WASM.");

    /// <summary>Not supported. Use <see cref="ExecuteDbDataReaderAsync(CommandBehavior,CancellationToken)"/>.</summary>
    protected override DbDataReader ExecuteDbDataReader(CommandBehavior behavior) =>
        throw new NotSupportedException("Use ExecuteReaderAsync. Sync operations are not supported in WASM.");

    /// <inheritdoc/>
    public override void Cancel() { }
    /// <inheritdoc/>
    public override void Prepare() { }
}
