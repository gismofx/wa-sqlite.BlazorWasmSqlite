using System;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FluentAssertions;
using Xunit;
using wa_sqlite.BlazorWasmSqlite.DBConnection;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// Deleting the database is the one operation that closes it, and the one that must leave no
/// usable connection behind.
/// </summary>
public class DeleteDatabaseTests
{
    private static SqliteWasmConnection Connect(FakeWorkerBridge bridge) =>
        new("TestApp", "TestFile", bridge);

    [Fact]
    public async Task Delete_waits_for_work_already_in_flight()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);
        await connection.OpenAsync();

        var query = connection.ExecuteAsync("SELECT 1");
        var delete = connection.DeleteDatabaseAsync("TestFile");
        await Task.WhenAll(query, delete);

        // The close and the delete travel on different channels, so the window between them is
        // where another caller could reopen the file. Nothing may overlap them.
        bridge.MaxConcurrent.Should().Be(1);
        bridge.Calls.Should().Contain("delete");
    }

    [Fact]
    public async Task Using_the_database_after_deleting_it_fails_loudly()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);
        await connection.OpenAsync();

        await connection.DeleteDatabaseAsync("TestFile");

        // Without this the worker's SQLITE_OPEN_CREATE would quietly build a new empty database
        // and the query would succeed with no rows — a data-loss shape dressed as a success.
        var reopen = async () => await connection.OpenAsync();
        await reopen.Should().ThrowAsync<InvalidOperationException>()
            .WithMessage("*deleted*");

        var query = async () => await connection.ExecuteAsync("SELECT 1");
        await query.Should().ThrowAsync<InvalidOperationException>()
            .WithMessage("*deleted*");
    }

    [Fact]
    public async Task Delete_releases_the_lease_so_it_cannot_wedge_the_page()
    {
        var bridge = new FakeWorkerBridge();
        var connection = Connect(bridge);
        await connection.OpenAsync();

        await connection.DeleteDatabaseAsync("TestFile");

        // A delete that kept the lease would leave every later caller waiting out the timeout
        // instead of being told the database is gone.
        connection.State.Should().Be(System.Data.ConnectionState.Closed);
    }
}
