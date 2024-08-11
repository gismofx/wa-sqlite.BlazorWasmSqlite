using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//using System.Data.SQLite;
using System.Data.Common;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection
{
    public class SqliteWasmConnection : DbConnection, IDbConnection
    {
        private SqliteWasmInterop _SqliteWasmInterop;

        private string _ConnectionString;

        public SqliteWasmConnection(SqliteWasmInterop sqliteWasmInterop)//, string connString)
        {
            _SqliteWasmInterop = sqliteWasmInterop;
        }
        //public string ConnectionString { get; set; }
        public override string ConnectionString { get => _ConnectionString; set => throw new NotImplementedException(); }

        public int ConnectionTimeout => throw new NotImplementedException();


        public override string Database => throw new NotImplementedException();

        public override ConnectionState State => _SqliteWasmInterop.State;


        public override string DataSource => throw new NotImplementedException();

        public override string ServerVersion => throw new NotImplementedException();

        public IDbTransaction BeginTransaction()
        {
            throw new NotImplementedException();
        }

        public IDbTransaction BeginTransaction(IsolationLevel il)
        {
            throw new NotImplementedException();
        }

        public override void ChangeDatabase(string databaseName)
        {
            throw new NotImplementedException();
        }

        public override void Close()
        {
            //_SqliteWasmInterop.Close().GetAwaiter().GetResult();
        }

        public void Dispose()
        {
            _SqliteWasmInterop.DisposeAsync().GetAwaiter().GetResult();
        }

        public override void Open()
        {
            throw new NotImplementedException();
            //_SqliteWasmInterop.Open("MyApp", "MyFile").In //GetAwaiter().GetResult();
        }

        public override async Task OpenAsync(CancellationToken cancellationToken)
        {
            await _SqliteWasmInterop.Open().AsTask();
        }

        public override async Task CloseAsync()
        {
            await _SqliteWasmInterop.Close();
        }

        public override async ValueTask DisposeAsync()
        {
            await _SqliteWasmInterop.DisposeAsync();
        }

        protected override DbTransaction BeginDbTransaction(IsolationLevel isolationLevel)
        {
            throw new NotImplementedException();
        }

        protected override DbCommand CreateDbCommand()
        {

            return new SqliteWasmCommand(_SqliteWasmInterop) { Connection = this };


        }

        #region Helpers



        #endregion

    }
}
