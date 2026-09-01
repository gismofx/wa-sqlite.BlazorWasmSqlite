using System;
using System.Collections.Concurrent;

namespace wa_sqlite.BlazorWasmSqlite.Worker;

/// <summary>
/// One <see cref="SqliteWorkerSession"/> per database, found by name.
/// </summary>
/// <remarks>
/// <para>
/// Connections created independently must find the same shared state when they name the same
/// database, and must NOT when they name different ones. Before this the default session was a
/// single static regardless of name, so a second database silently borrowed the first one's open
/// handle - every query against it would have read and written the wrong database, with no error
/// anywhere.
/// </para>
/// <para>
/// The registry is an object rather than a bare static so a test can hold its own and still
/// exercise the production lookup. Giving each connection its own session would have hidden the
/// defect completely, which is exactly what the first version of the test did.
/// </para>
/// </remarks>
internal sealed class SqliteWorkerSessionRegistry
{
    /// <summary>Makes the bridge for a session the first time that database is named.</summary>
    private readonly Func<ISqliteWorkerBridge> _bridgeFactory;
    // Ordinal, declared rather than inherited from the default comparer. Both names are
    // case-sensitive in the platforms underneath: IndexedDB compares database names as strings,
    // so "MyFile" and "myfile" are two different databases, and dbName is a path inside the VFS
    // with the same property. A case-INSENSITIVE key would map two genuinely different databases
    // onto one session, one lease and one open handle - the exact defect this class fixed, in a
    // more subtle form. Do not "helpfully" change this to OrdinalIgnoreCase.
    private readonly ConcurrentDictionary<string, SqliteWorkerSession> _sessions =
        new(StringComparer.Ordinal);

    /// <summary>Creates a registry whose sessions are built from <paramref name="bridgeFactory"/>.</summary>
    /// <param name="bridgeFactory">Invoked once per distinct database, not once per connection.</param>
    public SqliteWorkerSessionRegistry(Func<ISqliteWorkerBridge> bridgeFactory) =>
        _bridgeFactory = bridgeFactory;

    /// <summary>The registry every publicly-constructed connection uses.</summary>
    public static SqliteWorkerSessionRegistry Default { get; } =
        new(() => new JsInteropWorkerBridge());

    /// <summary>
    /// The session for one database, created on first use. Two callers naming the same database
    /// get the same session and therefore the same lease, handle and I/O lock; two callers
    /// naming different databases get neither.
    /// </summary>
    public SqliteWorkerSession Get(string dbName, string fileName) =>
        _sessions.GetOrAdd(Key(dbName, fileName), _ => new SqliteWorkerSession(_bridgeFactory()));

    // A NUL separator rather than a printable one: no database is legitimately named "a\0b",
    // whereas one named "a:b" might be, and a separator that can appear in a name lets two
    // different databases collide on one key - which is the bug this class exists to fix.
    /// <summary>
    /// Both names, separated by a NUL so no pair of names can collide with another pair.
    /// </summary>
    private static string Key(string dbName, string fileName) => $"{dbName}\0{fileName}";
}
