using Microsoft.JSInterop;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Threading;
using System.Threading.Tasks;
using wa_sqlite.BlazorWasmSqlite.DBConnection;
using wa_sqlite.BlazorWasmSqlite.JsonConverters;

namespace wa_sqlite.BlazorWasmSqlite;

public class SqliteWasmInterop
{
    private readonly Lazy<Task<IJSObjectReference>> moduleTask;

    private readonly IJSRuntime _JsRuntime;

    private int? _CurrentDB = null;

    public string DBName { get; init; }

    public string Filename { get; init; }

    public ConnectionState State { get; private set; }

    public readonly JsonSerializerOptions _JsonSerializerOptions;

    public SqliteWasmInterop(IJSRuntime jsRuntime, SqliteWasmConnectionStringBuilder connStringBuilder )
    {
        DBName = connStringBuilder.DatabaseName;// "MyApp";
        Filename = connStringBuilder.Filename; // "MyFile";

        _JsRuntime = jsRuntime;
        State = ConnectionState.Closed;
        moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
            "import", "./_content/wa_sqlite.BlazorWasmSqlite/sqlite.min.js").AsTask());

        _JsonSerializerOptions = new JsonSerializerOptions();
        _JsonSerializerOptions.Converters.Add(new BooleanConvertor());
        _JsonSerializerOptions.Converters.Add(new DateTimeConvertor());
        _JsonSerializerOptions.Converters.Add(new DateTimeNullableConvertor());
        _JsonSerializerOptions.Converters.Add(new StringConvertor());
        _JsonSerializerOptions.PropertyNameCaseInsensitive=true; //should be
        //_JsonSerializerOptions.NumberHandling = 
        
    }

    public async ValueTask<string> Prompt(string message)
    {
        //var module = await moduleTask.Value;
        //return await module.InvokeAsync<string>("showPrompt", message);
        return await _JsRuntime.InvokeAsync<string>("sqlite.showPrompt",message);
    }

    public async ValueTask Init()
    {
        //var module = await moduleTask.Value;
        await _JsRuntime.InvokeVoidAsync("sqlite.initDatabase");
        //await module.InvokeVoidAsync("InitDatabase");
    }

    public async ValueTask<int?> Open()
    {
        //var module = await moduleTask.Value;
        State = ConnectionState.Connecting;
        _CurrentDB = await _JsRuntime.InvokeAsync<int>("sqlite.open",DBName, Filename).ConfigureAwait(false);
        if (_CurrentDB.HasValue) State = ConnectionState.Open;
        else State = ConnectionState.Closed;
        return _CurrentDB;
    }

    public async ValueTask Close()
    {
        if (_CurrentDB == null) return;
        //var module = await moduleTask.Value;
        await _JsRuntime.InvokeVoidAsync("sqlite.close",_CurrentDB);
        _CurrentDB = null;
        State = ConnectionState.Closed;
    }

    public class QueryResult
    {
        public int Changes { get; set; } = 0;
        public JsonDocument Data { get; set; } = null;
        public List<List<string>> Columns { get; set; } = null!;
        public string Error { get; set; } = string.Empty;
    }


    /// <summary>
    /// Execute a query and return the quantity of changed rows
    /// </summary>
    /// <param name="query"></param>
    /// <returns></returns>
    public async Task<int> Execute(string query, IDictionary<string, object>? parameters = null)
    {
        var tState = State;
        if (State == ConnectionState.Closed)
            await Open();

        //var paramJson = JsonSerializer.Serialize(parameters,_JsonSerializerOptions);
        //var bytes = Encoding.UTF8.GetBytes(query);
        var result = await _JsRuntime.InvokeAsync<QueryResult>("sqlite.execute", _CurrentDB, query, parameters);// paramJson);// parameters);
        
        if (tState == ConnectionState.Closed)
            await Close();
        //return result;
        
        return result.Changes;
    }



    public async Task<JsonDocument> Query(string query, IDictionary<string, object>? parameters = null)
    {
        var result = await QueryRaw(query, parameters);//,null);
        
        return result.Data;
        //return await Query<JsonNode>(query);
    }

    /// <summary>
    /// Standard query expecting to return rows from the database
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="query"></param>
    /// <param name="parameters"></param>
    /// <returns></returns>
    public async Task<IEnumerable<T>> Query<T>(string query, IDictionary<string,object>? parameters = null)
    {
        var jsonResult = await QueryRaw(query, parameters);
        if (!string.IsNullOrWhiteSpace(jsonResult.Error)) 
            return Enumerable.Empty<T>();
        var result = JsonSerializer.Deserialize<IEnumerable<T>>(jsonResult.Data, _JsonSerializerOptions);
        return result;
    }

    /// <summary>
    /// Query when you're expecting a single row/object to be returned
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="query"></param>
    /// <param name="parameters"></param>
    /// <returns></returns>
    public async ValueTask<T> QuerySingle<T>(string query, IDictionary<string, object>? parameters = null ) where T:class
    {
        return (await Query<T>(query,parameters)).FirstOrDefault();
    }

    /// <summary>
    /// Return a single value from the database. Such as an aggregrate function. i.e. Count,Sum, etc
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="query"></param>
    /// <returns></returns>
    public async Task<T> QueryScalar<T>(string query, IDictionary<string, object>? parameters = null)
    {
        var raw = await QueryRaw(query,parameters);
        if (!string.IsNullOrWhiteSpace(raw.Error))
        {
            throw new Exception(raw.Error);
        }
        //dynamic json;
        try
        {
            foreach (var tt in raw.Data.RootElement.EnumerateArray())
            {
                foreach (var ob in tt.EnumerateObject())
                {
                    return ob.Value.Deserialize<T>();
                }
                var x = tt.Deserialize<T>();// Value.Deserialize<T>();
                return x;
            }
            return default; 
            //var json = raw.Data.RootElement.EnumerateObject() //Deserialize<IEnumerable<KeyValuePair<string,T>>>();
            //return json.First().Value;
            //return json.First().Value;
        }
        catch (Exception ex)
        {
            return default;
        }

        //return default(T);
    }

    public async Task<IEnumerable<T>> QueryScalars<T>(string query, IDictionary<string, object>? parameters = null)
    {
        var raw = await QueryRaw(query, parameters);
        if (!string.IsNullOrWhiteSpace(raw.Error))
        {
            throw new Exception(raw.Error);
        }
        //dynamic json;
        try
        {
            var values = new List<T>();
            foreach (var tt in raw.Data.RootElement.EnumerateArray())
            {
                foreach (var ob in tt.EnumerateObject())
                {
                    values.Add(ob.Value.Deserialize<T>());
                }
                //var x = tt.Deserialize<T>();// Value.Deserialize<T>();
                //return x;
            }
            return values;//default;
            //var json = raw.Data.RootElement.EnumerateObject() //Deserialize<IEnumerable<KeyValuePair<string,T>>>();
            //return json.First().Value;
            //return json.First().Value;
        }
        catch (Exception ex)
        {
            return default;
        }

        //return default(T);
    }


    //public async Task<T> QueryRaw<T>(string query, IDictionary<string, object>? parameters = null)
    //{

    //}

    private static object _lock = new object();
    //private static SemaphoreSlim _semaphoreSlim = new SemaphoreSlim();
    private readonly SemaphoreSlim _semaphore = new SemaphoreSlim(1, 1);
    public async Task<QueryResult> QueryRaw(string query, IDictionary<string, object>? parameters = null)
    {
        //lock (_lock)//Todo: Chad Test lock
        await _semaphore.WaitAsync();
        try
        {
            var tState = State;
            if (State == ConnectionState.Closed)
            {
                await Open();
            }
            if (State == ConnectionState.Connecting)
            {
                var nowPlus = DateTime.Now.AddSeconds(2);
                while (DateTime.Now < nowPlus)
                {
                    if (State == ConnectionState.Open) break;
                }
                if (State != ConnectionState.Open) return new() { Changes = 0, Columns = new(), Error = "Connection not open", Data = JsonDocument.Parse("{}") };// throw new Exception("Connection Not Open");
            }
            try
            {
                //var jsonResult = await _JsRuntime.InvokeAsync<QueryResult<T>>("sqlite.query", _CurrentDB, query, parameters);
                var queryResult = await _JsRuntime.InvokeAsync<QueryResult>("sqlite.query", _CurrentDB, query, parameters);
                return queryResult;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error in query/json in QueryRaw: {query}{Environment.NewLine}{ex.Message}", ex);
            }
            finally
            {
                if (tState == ConnectionState.Closed)
                    await Close();
            }
        }
        finally
        {
            _semaphore.Release();
        }

    }

    public async ValueTask DisposeAsync()
    {
        if (moduleTask.IsValueCreated)
        {
            var module = await moduleTask.Value;
            await module.DisposeAsync();
        }
    }


    #region Helpers

    public async ValueTask<IEnumerable<SqliteColumnInfo>> QueryTableSchema(string tableName)
    {
        var schema = await Query<SqliteColumnInfo>($"PRAGMA table_info({tableName});");
        return schema;
    }

    public async ValueTask<IEnumerable<SqliteTableInfo>> QueryAllTables()
    {
        var tables = await Query<SqliteTableInfo>("PRAGMA table_list;");
        return tables;
    }


    /// <summary>
    /// Check if a table exists
    /// </summary>
    /// <param name="tableName"></param>
    /// <returns></returns>
    public async Task<bool> TableExists(string tableName)
    {
        var sql = $"SELECT count(1) FROM sqlite_master WHERE type = 'table' AND name = '{tableName}'";
        var count = await QueryScalar<int>(sql);
        var result = Convert.ToBoolean(count);
        return result;
    }

    public async Task<bool> ViewExists(string viewName)
    {
        var sql = $"SELECT count(*) FROM sqlite_master WHERE type = 'view' AND name = '{viewName}'";
        var result = Convert.ToBoolean(await QueryScalar<int>(sql));
        return result;
    }



    /// <summary>
    /// Get the Table Create code for a given table
    /// </summary>
    /// <param name="tableName"></param>
    /// <returns></returns>
    public async Task<string> GetTableCreate(string tableName)
    {
        return await QueryScalar<string>($"Select sql from sqlite_schema where name = '{tableName}' COLLATE NOCASE;"); //collate nocase to allow search for table case-insensitive
    }

    #endregion


}
