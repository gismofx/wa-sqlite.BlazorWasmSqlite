using System.Data;
using System.Threading.Tasks;
using Dapper;
using FluentAssertions;
using Xunit;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// What a caller may do without calling <see cref="SqliteWasmConnection.OpenAsync(System.Threading.CancellationToken)"/>
/// first — which is what the README promises, and what nothing asserted until now.
/// </summary>
/// <remarks>
/// Every other test in this assembly opens explicitly before doing anything, so the whole
/// Dapper-opens-it-for-you path — the one the documentation leads with — was covered by no test
/// at all. That is the same shape as the vacuous overlap test: a harness that differs from the
/// documented usage in one silent way reports green on behaviour nobody ever ran.
/// </remarks>
public class ConnectionLifetimeTests
{
    private static SqliteWasmConnection Connect(FakeWorkerBridge bridge) =>
        new("TestApp", "TestFile", bridge);

    [Fact]
    public void Constructing_a_connection_takes_no_lease()
    {
        var bridge = new FakeWorkerBridge();

        var first = Connect(bridge);
        var second = Connect(bridge);

        // Construction is inert: no lease, no worker call, no handle. Only OpenAsync acquires,
        // which is why two connections can exist at once without either blocking the other.
        first.State.Should().Be(ConnectionState.Closed);
        second.State.Should().Be(ConnectionState.Closed);
        bridge.Calls.Should().BeEmpty();
    }

    [Fact]
    public async Task Dapper_opens_a_closed_connection_and_closes_it_again()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);

        // No OpenAsync. Dapper's async path opens a closed connection, runs the statement, and
        // closes it in its finally — the open/close round trip IS the lease acquire/release.
        await connection.ExecuteAsync("SELECT 1");

        bridge.OpenCount.Should().Be(1);
        connection.State.Should().Be(ConnectionState.Closed);

        // The lease came back, so the next caller is not left waiting on it.
        await connection.OpenAsync();
        connection.State.Should().Be(ConnectionState.Open);
    }

    [Fact]
    public async Task An_explicit_open_is_not_double_counted()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);

        await connection.OpenAsync();
        await connection.OpenAsync();
        // Dapper sees State.Open and takes no lease of its own, so this must not deadlock
        // against the lease the caller is already holding.
        await connection.ExecuteAsync("SELECT 1");

        bridge.OpenCount.Should().Be(1);
        connection.State.Should().Be(ConnectionState.Open);

        // One release returns it, because only one acquisition ever happened.
        connection.Close();
        await connection.OpenAsync();
        connection.State.Should().Be(ConnectionState.Open);
    }

    [Fact]
    public async Task A_transaction_refuses_a_closed_connection()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);

        // Dapper cannot open for a transaction — it is not the one starting it. Without this
        // guard BEGIN goes to ConnectionHandle 0, which the worker accepts silently.
        var begin = async () => await connection.BeginTransactionAsync();

        await begin.Should().ThrowAsync<System.InvalidOperationException>();
        bridge.Calls.Should().NotContain(c => c.Contains("BEGIN"));
    }
}
