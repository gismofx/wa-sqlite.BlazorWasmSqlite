using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>Parameter collection for <see cref="SqliteWasmCommand"/>.</summary>
public sealed class SqliteWasmParameterCollection : DbParameterCollection
{
    /// <summary>Backing store. Ordinal order is the order parameters were added.</summary>
    private readonly List<SqliteWasmParameter> _parameters = new();

    /// <inheritdoc/>
    public override int Count => _parameters.Count;
    /// <inheritdoc/>
    public override object SyncRoot => ((ICollection)_parameters).SyncRoot;

    /// <inheritdoc/>
    public override int Add(object value)
    {
        _parameters.Add((SqliteWasmParameter)value);
        return _parameters.Count - 1;
    }

    /// <summary>Adds a new parameter with the given name and value.</summary>
    public SqliteWasmParameter Add(string name, object? value)
    {
        var p = new SqliteWasmParameter(name, value);
        _parameters.Add(p);
        return p;
    }

    /// <inheritdoc/>
    public override void Clear() => _parameters.Clear();
    /// <inheritdoc/>
    public override bool Contains(object value) => _parameters.Contains((SqliteWasmParameter)value);
    /// <inheritdoc/>
    public override bool Contains(string value) => _parameters.Any(p => p.ParameterName == value);
    /// <inheritdoc/>
    public override int IndexOf(object value) => _parameters.IndexOf((SqliteWasmParameter)value);
    /// <inheritdoc/>
    public override int IndexOf(string parameterName) => _parameters.FindIndex(p => p.ParameterName == parameterName);
    /// <inheritdoc/>
    public override void Insert(int index, object value) => _parameters.Insert(index, (SqliteWasmParameter)value);
    /// <inheritdoc/>
    public override void Remove(object value) => _parameters.Remove((SqliteWasmParameter)value);
    /// <inheritdoc/>
    public override void RemoveAt(int index) => _parameters.RemoveAt(index);
    /// <inheritdoc/>
    public override void RemoveAt(string parameterName) => _parameters.RemoveAt(IndexOf(parameterName));
    /// <inheritdoc/>
    public override void CopyTo(Array array, int index) => ((ICollection)_parameters).CopyTo(array, index);
    /// <inheritdoc/>
    public override IEnumerator GetEnumerator() => _parameters.GetEnumerator();
    /// <inheritdoc/>
    public override void AddRange(Array values)
    {
        foreach (SqliteWasmParameter p in values)
            _parameters.Add(p);
    }

    /// <inheritdoc/>
    protected override DbParameter GetParameter(int index) => _parameters[index];
    /// <inheritdoc/>
    protected override DbParameter GetParameter(string parameterName) => _parameters.First(p => p.ParameterName == parameterName);
    /// <inheritdoc/>
    protected override void SetParameter(int index, DbParameter value) => _parameters[index] = (SqliteWasmParameter)value;
    /// <inheritdoc/>
    protected override void SetParameter(string parameterName, DbParameter value)
    {
        var idx = IndexOf(parameterName);
        if (idx >= 0) _parameters[idx] = (SqliteWasmParameter)value;
        else _parameters.Add((SqliteWasmParameter)value);
    }

    /// <summary>Converts parameters to a dictionary for JSON serialization to the Worker.</summary>
    internal Dictionary<string, object?>? ToDictionary()
    {
        if (_parameters.Count == 0) return null;
        var dict = new Dictionary<string, object?>(_parameters.Count);
        foreach (var p in _parameters)
            dict[p.ParameterName] = p.Value;
        return dict;
    }
}
