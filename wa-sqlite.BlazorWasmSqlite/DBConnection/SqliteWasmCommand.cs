using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection
{
    internal class SqliteWasmCommand : DbCommand
    {
        private readonly SqliteWasmInterop _interop;

        public SqliteWasmCommand(SqliteWasmInterop interop)
        {
            _interop = interop;
        }

        public override string CommandText { get; set; }
        public override int CommandTimeout { get; set; }
        public override CommandType CommandType { get; set; }
        public override bool DesignTimeVisible { get; set; }
        public override UpdateRowSource UpdatedRowSource { get; set; }
        protected override DbConnection? DbConnection { get; set; }

        protected override DbParameterCollection DbParameterCollection => throw new NotImplementedException();

        protected override DbTransaction? DbTransaction { get; set; }

        public override void Cancel()
        {
            throw new NotImplementedException();
        }

        public override int ExecuteNonQuery()
        {
            throw new NotImplementedException();
        }

        public override object? ExecuteScalar()
        {
            throw new NotImplementedException();
        }

        public override void Prepare()
        {
            throw new NotImplementedException();
        }

        protected override DbParameter CreateDbParameter()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// https://learn.microsoft.com/en-us/dotnet/api/system.data.commandbehavior?view=net-8.0
        /// </summary>
        /// <param name="behavior"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        protected override DbDataReader ExecuteDbDataReader(CommandBehavior behavior)
        {
            switch (behavior)
            {
                case CommandBehavior.SequentialAccess | CommandBehavior.CloseConnection:
                    //_interop.
                    //return new SqliteWasmDbDataReader();
                    break;
                default:
                    throw new NotImplementedException($" ExecuteDbDataReader Behavior No Handled: {behavior.ToString()}");
            }
            throw new NotImplementedException();
        }
    }
}
