using System;
using System.Data;
using System.Data.Common;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// Transaction backed by SQL BEGIN/COMMIT/ROLLBACK via <see cref="SqliteJsInterop"/>.
/// </summary>
public sealed class SqliteWasmTransaction : DbTransaction
{
    private readonly SqliteWasmConnection _connection;
    private bool _completed;

    internal SqliteWasmTransaction(SqliteWasmConnection connection)
    {
        _connection = connection;
    }

    protected override DbConnection DbConnection => _connection;
    public override IsolationLevel IsolationLevel => IsolationLevel.Serializable;

    internal async Task BeginAsync()
    {
        await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "BEGIN TRANSACTION", null);
    }

    public override void Commit() =>
        throw new NotSupportedException("Use CommitAsync.");

    public override void Rollback() =>
        throw new NotSupportedException("Use RollbackAsync.");

    public async Task CommitAsync()
    {
        if (_completed) return;
        await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "COMMIT", null);
        _completed = true;
    }

    public async Task RollbackAsync()
    {
        if (_completed) return;
        await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "ROLLBACK", null);
        _completed = true;
    }

    public override async ValueTask DisposeAsync()
    {
        if (!_completed)
        {
            try { await RollbackAsync(); }
            catch { /* swallow — best-effort rollback on dispose */ }
        }
    }
}
