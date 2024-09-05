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
using System.Threading.Tasks;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

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
        _CurrentDB = await _JsRuntime.InvokeAsync<int>("sqlite.open",DBName, Filename);
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

    //public class QueryResult<T>
    //{
    //    public int Changes { get; set; } = 0;

    //    public JsonDocument Data { get; set; } = null;

    //    //public IEnumerable<T> Data { get; set; } = Enumerable.Empty<T>();
    //    public List<List<string>> Columns { get; set; } = null!;
    //    public string Error { get; set; } = string.Empty;
    //}

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

    public async Task<IEnumerable<T>> Query<T>(string query, IDictionary<string,object>? parameters = null)
    {
        var jsonResult = await QueryRaw(query, parameters);
        var result = JsonSerializer.Deserialize<IEnumerable<T>>(jsonResult.Data, _JsonSerializerOptions);
        return result;
    }

    public async ValueTask<T> QuerySingle<T>(string query, IDictionary<string, object>? parameters = null )
    {
        return (await Query<T>(query,parameters)).First();
    }

    /// <summary>
    /// Return a single value from the database. Such as an aggregrate function. i.e. Count,Sum, etc
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <param name="query"></param>
    /// <returns></returns>
    public async Task<T> ExecuteScalar<T>(string query, IDictionary<string, object>? parameters = null)
    {
        var raw = await QueryRaw(query,parameters);
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


    public async Task<QueryResult> QueryRaw(string query, IDictionary<string, object>? parameters = null)
    {
        var tState = State;
        if (State == ConnectionState.Closed)
            await Open();
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
        finally {
            if (tState == ConnectionState.Closed)
                await Close();
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
        var sql = $"SELECT count(*) FROM sqlite_master WHERE type = 'table' AND name = '{tableName}'";
        var result = Convert.ToBoolean(await ExecuteScalar<int>(sql));
        return result;
    }

    /// <summary>
    /// Get the Table Create code for a given table
    /// </summary>
    /// <param name="tableName"></param>
    /// <returns></returns>
    public async Task<string> GetTableCreate(string tableName)
    {
        return await ExecuteScalar<string>($"Select sql from sqlite_schema where name = '{tableName}';");
    }

    #endregion


}
