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
        await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "BEGIN TRANSACTION", null);
    }

    /// <summary>Not supported — use <see cref="CommitAsync"/>.</summary>
    public override void Commit() => throw new NotSupportedException("Use CommitAsync.");

    /// <summary>Not supported — use <see cref="RollbackAsync"/>.</summary>
    public override void Rollback() => throw new NotSupportedException("Use RollbackAsync.");

    /// <summary>Commits the transaction. No-op if already completed.</summary>
    public async Task CommitAsync()
    {
        if (_completed) return;
        var result = await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "COMMIT", null);
        var error = result.GetPropertyAsString("error");
        if (!string.IsNullOrEmpty(error))
            throw new InvalidOperationException($"SQLite COMMIT failed: {error}");
        _completed = true;
    }

    /// <summary>Rolls back the transaction. No-op if already completed.</summary>
    public async Task RollbackAsync()
    {
        if (_completed) return;
        await SqliteJsInterop.ExecuteAsync(
            _connection.ConnectionHandle, "ROLLBACK", null);
        _completed = true;
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
