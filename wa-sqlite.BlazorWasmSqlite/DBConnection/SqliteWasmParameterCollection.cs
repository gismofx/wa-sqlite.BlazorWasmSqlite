using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// Parameter collection for <see cref="SqliteWasmCommand"/>.
/// </summary>
public sealed class SqliteWasmParameterCollection : DbParameterCollection
{
    private readonly List<SqliteWasmParameter> _parameters = new();

    public override int Count => _parameters.Count;
    public override object SyncRoot => ((ICollection)_parameters).SyncRoot;

    public override int Add(object value)
    {
        _parameters.Add((SqliteWasmParameter)value);
        return _parameters.Count - 1;
    }

    public SqliteWasmParameter Add(string name, object? value)
    {
        var p = new SqliteWasmParameter(name, value);
        _parameters.Add(p);
        return p;
    }

    public override void Clear() => _parameters.Clear();

    public override bool Contains(object value) =>
        _parameters.Contains((SqliteWasmParameter)value);

    public override bool Contains(string value) =>
        _parameters.Any(p => p.ParameterName == value);

    public override int IndexOf(object value) =>
        _parameters.IndexOf((SqliteWasmParameter)value);

    public override int IndexOf(string parameterName) =>
        _parameters.FindIndex(p => p.ParameterName == parameterName);

    public override void Insert(int index, object value) =>
        _parameters.Insert(index, (SqliteWasmParameter)value);

    public override void Remove(object value) =>
        _parameters.Remove((SqliteWasmParameter)value);

    public override void RemoveAt(int index) =>
        _parameters.RemoveAt(index);

    public override void RemoveAt(string parameterName) =>
        _parameters.RemoveAt(IndexOf(parameterName));

    public override void CopyTo(Array array, int index) =>
        ((ICollection)_parameters).CopyTo(array, index);

    public override IEnumerator GetEnumerator() => _parameters.GetEnumerator();

    public override void AddRange(Array values)
    {
        foreach (SqliteWasmParameter p in values)
            _parameters.Add(p);
    }

    protected override DbParameter GetParameter(int index) => _parameters[index];

    protected override DbParameter GetParameter(string parameterName) =>
        _parameters.First(p => p.ParameterName == parameterName);

    protected override void SetParameter(int index, DbParameter value) =>
        _parameters[index] = (SqliteWasmParameter)value;

    protected override void SetParameter(string parameterName, DbParameter value)
    {
        var idx = IndexOf(parameterName);
        if (idx >= 0) _parameters[idx] = (SqliteWasmParameter)value;
        else _parameters.Add((SqliteWasmParameter)value);
    }

    /// <summary>
    /// Converts parameters to a dictionary for JSON serialization to the Worker.
    /// </summary>
    internal Dictionary<string, object?>? ToDictionary()
    {
        if (_parameters.Count == 0) return null;
        var dict = new Dictionary<string, object?>(_parameters.Count);
        foreach (var p in _parameters)
            dict[p.ParameterName] = p.Value;
        return dict;
    }
}
