using System.Collections;
using System.Diagnostics.CodeAnalysis;
using System.Security.Cryptography.X509Certificates;

namespace wa_sqlite.BlazorWasmSqlite;

/// <summary>
/// Wrapper for a dictionary of sqlite query/command parameters
/// </summary>
public class SqliteQueryParams : IDictionary<string, object>
{
    private Dictionary<string, object> _params = new();

    public SqliteQueryParams()
    {

    }

    public SqliteQueryParams(string key, object value)
    {
        Add(key, value);
    }

    public object this[string key] { get => _params[key]; set => _params[key] = value; }

    public ICollection<string> Keys => _params.Keys;

    public ICollection<object> Values => _params.Values;

    public int Count => _params.Count;

    public bool IsReadOnly => false;

    /// <summary>
    /// Add a datetime and convert to unix epoch
    /// </summary>
    /// <param name="key"></param>
    /// <param name="date"></param>
    public void Add(string key, DateTime date)
    {
        long seconds = (long)date.Subtract(DateTime.UnixEpoch).TotalSeconds;
        Add(key, seconds);//date.ToString("yyyy-MM-dd HH:mm:ss.fff"));
    }

    /// <summary>
    /// Add boolean parameter and convert to an Int
    /// Sqlite stores boolean values as 0 or 1
    /// </summary>
    /// <param name="key"></param>
    /// <param name="boolean"></param>
    public void Add(string key, bool boolean)
    {
        Add(key, Convert.ToInt32(boolean));
    }

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

    public void Add(KeyValuePair<string, object> item)
    {
        _params.Add(item.Key, item.Value);
    }

    public void Clear()
    {
        _params.Clear();
    }

    public bool Contains(KeyValuePair<string, object> item)
    {
        return _params.Contains(item);
    }

    public bool ContainsKey(string key)
    {
        return _params.ContainsKey(key);
    }

    public void CopyTo(KeyValuePair<string, object>[] array, int arrayIndex)
    {
        throw new NotImplementedException();
    }

    public IEnumerator<KeyValuePair<string, object>> GetEnumerator()
    {
        return _params.GetEnumerator();
    }

    public bool Remove(string key)
    {
        return _params.Remove(key);
    }

    public bool Remove(KeyValuePair<string, object> item)
    {
        return _params.Remove(item.Key);
    }

    public bool TryGetValue(string key, [MaybeNullWhen(false)] out object value)
    {
        return _params.TryGetValue(key, out value);
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return _params.GetEnumerator();
    }
}
