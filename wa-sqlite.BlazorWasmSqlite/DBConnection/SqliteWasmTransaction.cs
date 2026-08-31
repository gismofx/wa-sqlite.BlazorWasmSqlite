using System;
using System.Data;
using System.Data.Common;
using System.Runtime.Versioning;
using System.Threading.Tasks;

namespace wa_sqlite.BlazorWasmSqlite.DBConnection;

/// <summary>
/// Transaction backed by SQL BEGIN/COMMIT/ROLLBACK via <see cref="SqliteJsInterop"/>.
/// </summary>
[SupportedOSPlatform("browser")]
public sealed class SqliteWasmTransaction : DbTransaction
{
    private readonly SqliteWasmConnection _connection;
    private bool _completed;

    internal SqliteWasmTransaction(SqliteWasmConnection connection)
    {
        _connection = connection;
    }

    /// <inheritdoc/>
    protected override DbConnection DbConnection => _connection;
    /// <inheritdoc/>
    public override IsolationLevel IsolationLevel => IsolationLevel.Serializable;

    internal async Task BeginAsync()
    {
        // Hold the I/O lock for the whole transaction. On a single global handle there is no
        // such thing as another connection's transaction: anything that runs between BEGIN and
        // COMMIT is inside this one, and a rollback would take that work with it. Statements
        // issued through this connection reuse the scope rather than re-entering it.
        await _connection.Session.EnterExclusiveScopeAsync(default);
        _connection.ActiveTransaction = this;
        try
        {
            await _connection.Bridge.ExecuteAsync(
                _connection.ConnectionHandle, "BEGIN TRANSACTION", null);
        }
        catch
        {
            EndScope();
            throw;
        }
    }

    private void EndScope()
    {
        if (_connection.ActiveTransaction != this) return;
        _connection.ActiveTransaction = null;
        _connection.Session.ExitExclusiveScope();
    }

    /// <summary>Not supported — use <see cref="CommitAsync"/>.</summary>
    public override void Commit() => throw new NotSupportedException("Use CommitAsync.");

    /// <summary>Not supported — use <see cref="RollbackAsync"/>.</summary>
    public override void Rollback() => throw new NotSupportedException("Use RollbackAsync.");

    /// <summary>Commits the transaction. No-op if already completed.</summary>
    public async Task CommitAsync()
    {
        if (_completed) return;
        try
        {
            var result = await _connection.Bridge.ExecuteAsync(
                _connection.ConnectionHandle, "COMMIT", null);
            if (!string.IsNullOrEmpty(result.Error))
                throw new InvalidOperationException($"SQLite COMMIT failed: {result.Error}");
        }
        finally
        {
            // Release the scope even when COMMIT fails, or a failed transaction locks the
            // database against every later caller for the life of the page.
            _completed = true;
            EndScope();
        }
    }

    /// <summary>Rolls back the transaction. No-op if already completed.</summary>
    public async Task RollbackAsync()
    {
        if (_completed) return;
        try
        {
            await _connection.Bridge.ExecuteAsync(
                _connection.ConnectionHandle, "ROLLBACK", null);
        }
        finally
        {
            _completed = true;
            EndScope();
        }
    }

    /// <inheritdoc/>
    public override async ValueTask DisposeAsync()
    {
        if (!_completed)
        {
            try { await RollbackAsync(); }
            catch { /* swallow — best-effort rollback on dispose */ }
        }
    }
}
