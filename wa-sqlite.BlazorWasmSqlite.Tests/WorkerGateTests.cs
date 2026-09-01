using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FluentAssertions;
using Xunit;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// The concurrency guarantees the library owes its callers, asserted rather than assumed.
/// </summary>
/// <remarks>
/// Every test here fails before the gate exists, and each one names a failure that has actually
/// been observed in the browser: a duplicated open is what registers a second VFS under a name
/// SQLite already holds, and overlapping operations on one global handle are what
/// SqliteWasmConnection's own WorkerLock comment describes as "responses delivered to the wrong
/// awaiter".
/// </remarks>
public class WorkerGateTests
{
    private static SqliteWasmConnection Connect(FakeWorkerBridge bridge) =>
        new("TestApp", "TestFile", bridge);

    [Fact]
    public async Task Concurrent_opens_reach_the_worker_once()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);

        await Task.WhenAll(Enumerable.Range(0, 4).Select(_ => connection.OpenAsync()));

        // Four callers, one database. A second `open` is what re-registers a VFS under a name
        // SQLite already holds, which is the eviction behind `xDeviceCharacteristics`.
        bridge.OpenCount.Should().Be(1);
    }

    [Fact]
    public async Task Nothing_overlaps_a_worker_operation()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);
        await connection.OpenAsync();

        // A lifecycle call racing a query is the shape that has to be impossible: the command
        // path takes WorkerLock today and CloseAsync does not.
        //
        // This deliberately uses CloseAsync rather than a second OpenAsync. An OpenAsync on an
        // already-open connection returns at its first line without touching the bridge, so the
        // test would pass without ever creating the overlap it claims to detect — which is
        // exactly what the first draft of it did.
        await Task.WhenAll(
            connection.ExecuteAsync("SELECT 1"),
            connection.CloseAsync(),
            connection.ExecuteAsync("SELECT 2"));

        bridge.MaxConcurrent.Should().Be(1);
    }

    [Fact]
    public async Task A_transaction_excludes_other_callers()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);
        await connection.OpenAsync();

        var transaction = await connection.BeginTransactionAsync();

        // An unrelated caller on the same shared connection. It passes no transaction, because
        // it does not know one is open - which is exactly the situation that must be safe.
        var outsider = connection.ExecuteAsync("SELECT 'outsider'");

        // Work that belongs to the transaction says so, the conventional way. This also proves
        // the re-entrancy guard: without it this statement would deadlock against its own BEGIN.
        await connection.ExecuteAsync("INSERT INTO t VALUES (1)", null, transaction);

        await transaction.CommitAsync();
        await outsider;

        var calls = bridge.Calls.ToList();
        var begin = calls.FindIndex(c => c.Contains("BEGIN TRANSACTION"));
        var commit = calls.FindIndex(c => c.Contains("COMMIT"));
        var stranger = calls.FindIndex(c => c.Contains("outsider"));

        begin.Should().BeGreaterThanOrEqualTo(0);
        commit.Should().BeGreaterThan(begin);

        // On one global handle there is no such thing as "another connection's transaction":
        // anything that lands between BEGIN and COMMIT is inside it, and a rollback takes it too.
        (stranger > begin && stranger < commit).Should()
            .BeFalse("work from another caller must not land inside a transaction");
    }
}
