using System.Linq;
using System.Threading.Tasks;
using FluentAssertions;
using Xunit;
using wa_sqlite.BlazorWasmSqlite.DBConnection;
using wa_sqlite.BlazorWasmSqlite.Worker;

namespace wa_sqlite.BlazorWasmSqlite.Tests;

/// <summary>
/// Two databases are two databases. The shared state introduced with the lease is keyed by
/// file, not global, or a second database silently borrows the first one's handle.
/// </summary>
public class MultipleDatabaseTests
{
    [Fact]
    public async Task Two_databases_each_get_their_own_handle()
    {
        var bridge = new FakeWorkerBridge();
        // One registry, shared - which is what the public constructor does. Giving each
        // connection its own session would hide the defect completely.
        var registry = new SqliteWorkerSessionRegistry(() => bridge);

        var a = new SqliteWasmConnection("AppA", "FileA", registry);
        var b = new SqliteWasmConnection("AppB", "FileB", registry);

        await a.OpenAsync();
        await b.OpenAsync();

        // The worker is asked to open each file. Caching the open task without regard to which
        // file was asked for would hand B the handle SQLite returned for A - and every query B
        // then ran would read and write A's data, silently and with no error anywhere.
        bridge.OpenCount.Should().Be(2);
        a.ConnectionHandle.Should().NotBe(b.ConnectionHandle);
    }

    [Fact]
    public async Task Names_differing_only_in_case_are_different_databases()
    {
        var bridge = new FakeWorkerBridge();
        var registry = new SqliteWorkerSessionRegistry(() => bridge);

        var lower = new SqliteWasmConnection("app", "file", registry);
        var upper = new SqliteWasmConnection("App", "File", registry);

        await lower.OpenAsync();
        await upper.OpenAsync();

        // IndexedDB compares database names as strings, so "file" and "File" really are two
        // databases. A case-insensitive key would hand both connections one session, one lease
        // and one open handle — the defect 28bb78d fixed, in a subtler form.
        bridge.OpenCount.Should().Be(2);
        lower.ConnectionHandle.Should().NotBe(upper.ConnectionHandle);
    }

    [Fact]
    public async Task One_database_being_open_does_not_block_another()
    {
        var bridge = new FakeWorkerBridge();
        var registry = new SqliteWorkerSessionRegistry(() => bridge);

        var a = new SqliteWasmConnection("AppA", "FileA", registry);
        var b = new SqliteWasmConnection("AppB", "FileB", registry);

        await a.OpenAsync();

        // The lease is exclusive use of ONE database. Holding A must not make B wait out the
        // timeout: they are different files with different VFS instances.
        var openB = b.OpenAsync();
        var finished = await Task.WhenAny(openB, Task.Delay(2000));
        finished.Should().BeSameAs(openB, "a lease on one database must not lock another");
        await openB;
    }
}
