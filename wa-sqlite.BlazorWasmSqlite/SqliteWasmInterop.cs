using Microsoft.JSInterop;
using System;
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

namespace wa_sqlite.BlazorWasmSqlite
{
    public class SqliteWasmInterop
    {
        private readonly Lazy<Task<IJSObjectReference>> moduleTask;

        private readonly IJSRuntime _JsRuntime;

        private int? _CurrentDB = null;

        public string DBName { get; init; }

        public string Filename { get; init; }

        public ConnectionState State { get; private set; }

        public SqliteWasmInterop(IJSRuntime jsRuntime, SqliteWasmConnectionStringBuilder connStringBuilder )
        {
            DBName = connStringBuilder.DatabaseName;// "MyApp";
            Filename = connStringBuilder.Filename; // "MyFile";

            _JsRuntime = jsRuntime;
            State = ConnectionState.Closed;
            moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/wa_sqlite.BlazorWasmSqlite/sqlite.min.js").AsTask());
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

        private class QueryResult
        {
            public dynamic Data { get; set; } = null!;
            public List<List<string>> Columns { get; set; } = null!;
            public string Error { get; set; }
        }

        public async ValueTask<string> Execute(string query)
        {
            var tState = State;
            if (State == ConnectionState.Closed)
                await Open();

            var result = await _JsRuntime.InvokeAsync<QueryResult>("sqlite.execute",_CurrentDB, query);
            
            if (tState == ConnectionState.Closed)
                await Close();
            //return result;
            
            return string.Empty;
        }

        

        public async ValueTask<IEnumerable<JsonNode>> Query(string query)
        {
            return await Query<JsonNode>(query);
        }


        public async ValueTask<IEnumerable<T>> Query<T>(string query)
        {
            var tState = State;
            if (State == ConnectionState.Closed)
                await Open();
            
            var opt = new JsonSerializerOptions() { PropertyNameCaseInsensitive = true, };
            var jsonResult = await _JsRuntime.InvokeAsync<JsonNode>("sqlite.query", _CurrentDB, query);
            var result = JsonSerializer.Deserialize<IEnumerable<T>>(jsonResult,opt);
            
            if (tState == ConnectionState.Closed)
                await Close();
            return result;
        }

        public async ValueTask<T> QuerySingle<T>(string query)
        {
            return (await Query<T>(query)).First();
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

        #endregion

    }
}
