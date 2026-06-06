using System.Collections;
using System.Diagnostics.CodeAnalysis;

namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// Wrapper for a dictionary of SQLite query/command parameters.
/// </summary>
[Obsolete("Use Dapper anonymous objects or DynamicParameters instead. SqliteQueryParams will be removed in a future release.", error: false)]
public class SqliteQueryParams : IDictionary<string, object>
{
    private Dictionary<string, object> _params = new();

    /// <summary>Initialises an empty parameter collection.</summary>
    public SqliteQueryParams() { }

    /// <inheritdoc/>
    public object this[string key] { get => _params[key]; set => _params[key] = value; }
    /// <inheritdoc/>
    public ICollection<string> Keys => _params.Keys;
    /// <inheritdoc/>
    public ICollection<object> Values => _params.Values;
    /// <inheritdoc/>
    public int Count => _params.Count;
    /// <inheritdoc/>
    public bool IsReadOnly => false;

    /// <summary>Adds a <see cref="DateTime"/> parameter, converting it to Unix epoch seconds.</summary>
    public void Add(string key, DateTime date)
    {
        long seconds = (long)date.Subtract(DateTime.UnixEpoch).TotalSeconds;
        Add(key, seconds);
    }

    /// <summary>Adds a <see cref="bool"/> parameter, converting it to <c>1</c> or <c>0</c>.</summary>
    public void Add(string key, bool boolean)
    {
        Add(key, Convert.ToInt32(boolean));
    }

    /// <inheritdoc/>
    public void Add(string key, object value)
    {
        switch (key[0])
        {
            case ('@'):
            case (':'):
            case ('$'):
            case ('?'):
                break;
            default:
                throw new ArgumentException($"sqlite parameter {key} must start with '@', ':', '$' , or '?'");
        }
        _params.Add(key, value);
    }

    /// <inheritdoc/>
    public void Add(KeyValuePair<string, object> item) => _params.Add(item.Key, item.Value);
    /// <inheritdoc/>
    public void Clear() => _params.Clear();
    /// <inheritdoc/>
    public bool Contains(KeyValuePair<string, object> item) => _params.Contains(item);
    /// <inheritdoc/>
    public bool ContainsKey(string key) => _params.ContainsKey(key);
    /// <inheritdoc/>
    public void CopyTo(KeyValuePair<string, object>[] array, int arrayIndex) => throw new NotImplementedException();
    /// <inheritdoc/>
    public IEnumerator<KeyValuePair<string, object>> GetEnumerator() => _params.GetEnumerator();
    /// <inheritdoc/>
    public bool Remove(string key) => _params.Remove(key);
    /// <inheritdoc/>
    public bool Remove(KeyValuePair<string, object> item) => _params.Remove(item.Key);
    /// <inheritdoc/>
    public bool TryGetValue(string key, [MaybeNullWhen(false)] out object value) => _params.TryGetValue(key, out value);

    IEnumerator IEnumerable.GetEnumerator() => _params.GetEnumerator();
}
