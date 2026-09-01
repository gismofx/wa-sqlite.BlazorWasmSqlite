using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Common;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// DataReader backed by in-memory query results from wa-sqlite Worker.
/// All rows are fetched at construction time (no streaming cursor).
/// </summary>
internal sealed class SqliteWasmDbDataReader : DbDataReader
{
    /// <summary>Every row, already materialised - the Worker returns the whole result set at once.</summary>
    private readonly List<Dictionary<string, JsonElement>> _rows;

    /// <summary>Column names in ordinal order.</summary>
    private readonly string[] _columns;

    /// <summary>Rows affected, or -1 for a query.</summary>
    private readonly int _recordsAffected;

    /// <summary>Cursor position. -1 until the first <see cref="Read"/>.</summary>
    private int _currentRow = -1;

    /// <summary>Set by Close; there is no unmanaged resource to release.</summary>
    private bool _closed;

    /// <summary>Wraps a result set the Worker has already returned in full.</summary>
    internal SqliteWasmDbDataReader(
        List<Dictionary<string, JsonElement>> rows,
        string[] columns,
        int recordsAffected = -1)
    {
        _rows = rows;
        _columns = columns;
        _recordsAffected = recordsAffected;
    }

    // ── Properties ─────────────────────────────────────────────────────

    public override int FieldCount => _columns.Length;
    public override int Depth => 0;
    public override bool HasRows => _rows.Count > 0;
    public override bool IsClosed => _closed;
    public override int RecordsAffected => _recordsAffected;

    public override object this[int ordinal] => GetValue(ordinal);
    public override object this[string name] => GetValue(GetOrdinal(name));

    // ── Navigation ────────────────────────────────────────────────────

    public override bool Read()
    {
        if (_closed) return false;
        _currentRow++;
        return _currentRow < _rows.Count;
    }

    public override bool NextResult() => false;

    public override void Close() => _closed = true;

    public override IEnumerator GetEnumerator() =>
        new DbEnumerator(this, closeReader: false);

    // ── Column metadata ───────────────────────────────────────────────

    public override string GetName(int ordinal) => _columns[ordinal];

    public override int GetOrdinal(string name)
    {
        for (int i = 0; i < _columns.Length; i++)
            if (string.Equals(_columns[i], name, StringComparison.OrdinalIgnoreCase))
                return i;
        throw new IndexOutOfRangeException($"Column '{name}' not found.");
    }

    public override string GetDataTypeName(int ordinal) => "TEXT";

    [return: DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicFields | DynamicallyAccessedMemberTypes.PublicProperties)]
    public override Type GetFieldType(int ordinal) => typeof(object);

    // ── Value access ──────────────────────────────────────────────────

    /// <summary>The current row's value at <paramref name="ordinal"/>, as a raw JSON element.</summary>
    private JsonElement GetElement(int ordinal)
    {
        var row = _rows[_currentRow];
        var colName = _columns[ordinal];
        return row.TryGetValue(colName, out var el) ? el : default;
    }

    public override bool IsDBNull(int ordinal) =>
        GetElement(ordinal).ValueKind == JsonValueKind.Null ||
        GetElement(ordinal).ValueKind == JsonValueKind.Undefined;

    public override object GetValue(int ordinal)
    {
        var el = GetElement(ordinal);
        return el.ValueKind switch
        {
            JsonValueKind.String => el.GetString()!,
            JsonValueKind.Number => el.TryGetInt64(out var l) ? l : el.GetDouble(),
            JsonValueKind.True => true,
            JsonValueKind.False => false,
            JsonValueKind.Null or JsonValueKind.Undefined => DBNull.Value,
            _ => el.GetRawText()
        };
    }

    public override int GetValues(object[] values)
    {
        var count = Math.Min(values.Length, _columns.Length);
        for (int i = 0; i < count; i++)
            values[i] = GetValue(i);
        return count;
    }

    public override string GetString(int ordinal) => GetElement(ordinal).GetString()!;
    public override int GetInt32(int ordinal) => GetElement(ordinal).GetInt32();
    public override long GetInt64(int ordinal) => GetElement(ordinal).GetInt64();
    public override double GetDouble(int ordinal) => GetElement(ordinal).GetDouble();
    public override float GetFloat(int ordinal) => (float)GetElement(ordinal).GetDouble();
    public override decimal GetDecimal(int ordinal) => GetElement(ordinal).GetDecimal();
    public override bool GetBoolean(int ordinal)
    {
        var el = GetElement(ordinal);
        // SQLite stores bool as INTEGER 0/1 → arrives as JsonValueKind.Number.
        // Convert.ToBoolean(double) is the standard .NET numeric-to-bool idiom:
        // false for 0.0, true for anything else. Handles float64 round-trip from JS.
        if (el.ValueKind == JsonValueKind.Number)
            return Convert.ToBoolean(el.GetDouble());
        return el.GetBoolean();
    }
    public override byte GetByte(int ordinal) => GetElement(ordinal).GetByte();
    public override short GetInt16(int ordinal) => GetElement(ordinal).GetInt16();
    public override char GetChar(int ordinal) => GetElement(ordinal).GetString()![0];
    public override Guid GetGuid(int ordinal)
    {
        var el = GetElement(ordinal);
        if (el.ValueKind == JsonValueKind.Null || el.ValueKind == JsonValueKind.Undefined)
            return Guid.Empty;
        return Guid.TryParse(el.GetString(), out var g) ? g : Guid.Empty;
    }

    public override DateTime GetDateTime(int ordinal)
    {
        var el = GetElement(ordinal);
        // Legacy: epoch seconds stored as JSON number (old SqliteWasmInterop write path)
        if (el.ValueKind == JsonValueKind.Number)
            return DateTime.UnixEpoch.AddSeconds(el.GetInt64());
        var s = el.GetString()!;
        // Legacy: epoch seconds stored as string
        if (long.TryParse(s, out var epoch))
            return DateTime.UnixEpoch.AddSeconds(epoch);
        // Current: ISO 8601
        return DateTime.Parse(s);
    }

    public override long GetBytes(int ordinal, long dataOffset, byte[]? buffer, int bufferOffset, int length) =>
        throw new NotSupportedException();

    public override long GetChars(int ordinal, long dataOffset, char[]? buffer, int bufferOffset, int length) =>
        throw new NotSupportedException();

    // ── Factory ───────────────────────────────────────────────────────

    /// <summary>
    /// Parse the JSON result string from <see cref="SqliteJsInterop.QueryJsonAsync"/>
    /// into a DataReader.
    /// </summary>
    internal static SqliteWasmDbDataReader FromJson(string json)
    {
        using var doc = JsonDocument.Parse(json);
        var root = doc.RootElement;
        var error = root.GetProperty("error").GetString();
        if (!string.IsNullOrEmpty(error))
        {
            // Include the SQL from the error payload when available so the exception
            // message surfaces the failing statement rather than just the SQLite error code.
            string? sql = null;
            if (root.TryGetProperty("sql", out var sqlEl))
                sql = sqlEl.GetString();

            var message = string.IsNullOrEmpty(sql)
                ? $"SQLite error: {error}"
                : $"SQLite error: {error} | SQL: {sql}";

            throw new InvalidOperationException(message);
        }

        var dataArray = root.GetProperty("data");
        var rows = new List<Dictionary<string, JsonElement>>();
        var columnSet = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

        foreach (var rowEl in dataArray.EnumerateArray())
        {
            var row = new Dictionary<string, JsonElement>(StringComparer.OrdinalIgnoreCase);
            foreach (var prop in rowEl.EnumerateObject())
            {
                row[prop.Name] = prop.Value.Clone();
                columnSet.Add(prop.Name);
            }
            rows.Add(row);
        }

        var columns = new string[columnSet.Count];
        columnSet.CopyTo(columns);
        return new SqliteWasmDbDataReader(rows, columns);
    }
}
