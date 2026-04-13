using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// DbCommand implementation backed by <see cref="SqliteJsInterop"/>.
/// Async-only — sync methods throw <see cref="NotSupportedException"/>.
/// </summary>
public sealed class SqliteWasmCommand : DbCommand
{
    private readonly SqliteWasmParameterCollection _parameters = new();
    private SqliteWasmConnection? _connection;

    public SqliteWasmCommand() { }

    public SqliteWasmCommand(string commandText)
    {
        CommandText = commandText;
    }

    public SqliteWasmCommand(string commandText, SqliteWasmConnection connection)
    {
        CommandText = commandText;
        _connection = connection;
    }

    // ── Properties ─────────────────────────────────────────────────────

    public override string CommandText { get; set; } = string.Empty;
    public override int CommandTimeout { get; set; } = 30;
    public override CommandType CommandType { get; set; } = CommandType.Text;
    public override bool DesignTimeVisible { get; set; }
    public override UpdateRowSource UpdatedRowSource { get; set; }

    protected override DbConnection? DbConnection
    {
        get => _connection;
        set => _connection = (SqliteWasmConnection?)value;
    }

    protected override DbParameterCollection DbParameterCollection => _parameters;
    protected override DbTransaction? DbTransaction { get; set; }

    // ── Parameter helpers ──────────────────────────────────────────────

    public new SqliteWasmParameterCollection Parameters => _parameters;

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

    private static object? Coerce(object? value)
    {
        if (value is null || value is DBNull) return null;
        if (value is bool b)      return b ? 1 : 0;
        if (value is DateTime dt) return dt.ToString("O");
        return value;
    }

    // ── Async execution (primary path) ─────────────────────────────────

    public override async Task<int> ExecuteNonQueryAsync(CancellationToken ct)
    {
        var workerLock = _connection!.WorkerLock;
        await workerLock.WaitAsync(ct);
        try
        {
            var connHandle = _connection!.ConnectionHandle;
            var result = await SqliteJsInterop.ExecuteAsync(connHandle, CommandText, SerializeParameters());
            var error = result.GetPropertyAsString("error");
            if (!string.IsNullOrEmpty(error))
                throw new Exception($"SQLite execute error: {error} | SQL: {CommandText.Trim()}");
            return result.GetPropertyAsInt32("changes");
        }
        finally
        {
            workerLock.Release();
        }
    }

    public override async Task<object?> ExecuteScalarAsync(CancellationToken ct)
    {
        var workerLock = _connection!.WorkerLock;
        await workerLock.WaitAsync(ct);
        try
        {
            var connHandle = _connection!.ConnectionHandle;
            var json = await SqliteJsInterop.QueryJsonAsync(connHandle, CommandText, SerializeParameters());
            try
            {
                using var reader = SqliteWasmDbDataReader.FromJson(json);
                if (reader.Read() && reader.FieldCount > 0)
                    return reader.GetValue(0);
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception($"{ex.Message} | SQL: {CommandText.Trim()}", ex);
            }
        }
        finally
        {
            workerLock.Release();
        }
    }

    protected override async Task<DbDataReader> ExecuteDbDataReaderAsync(
        CommandBehavior behavior, CancellationToken ct)
    {
        var workerLock = _connection!.WorkerLock;
        await workerLock.WaitAsync(ct);
        try
        {
            var connHandle = _connection!.ConnectionHandle;
            var json = await SqliteJsInterop.QueryJsonAsync(connHandle, CommandText, SerializeParameters());
            try
            {
                return SqliteWasmDbDataReader.FromJson(json);
            }
            catch (Exception ex)
            {
                throw new Exception($"{ex.Message} | SQL: {CommandText.Trim()}", ex);
            }
        }
        finally
        {
            workerLock.Release();
        }
    }

    // ── Sync methods — not supported in WASM ───────────────────────────

    public override int ExecuteNonQuery() =>
        throw new NotSupportedException("Use ExecuteNonQueryAsync. Sync operations are not supported in WASM.");

    public override object? ExecuteScalar() =>
        throw new NotSupportedException("Use ExecuteScalarAsync. Sync operations are not supported in WASM.");

    protected override DbDataReader ExecuteDbDataReader(CommandBehavior behavior) =>
        throw new NotSupportedException("Use ExecuteReaderAsync. Sync operations are not supported in WASM.");

    public override void Cancel() { }
    public override void Prepare() { }
}
