# wa-sqlite.BlazorWasmSqlite

<img src="wa-sqlite.BlazorWasmSqliteIcon.png" alt="wa-sqlite.BlazorWasmSqlite logo" width="96" height="96" align="left" style="margin-right:16px; margin-bottom:8px"/>

[![NuGet](https://img.shields.io/nuget/v/wa-sqlite.BlazorWasmSqlite?style=flat-square&color=004880&label=NuGet)](https://www.nuget.org/packages/wa-sqlite.BlazorWasmSqlite)
[![NuGet Downloads](https://img.shields.io/nuget/dt/wa-sqlite.BlazorWasmSqlite?style=flat-square&color=004880)](https://www.nuget.org/packages/wa-sqlite.BlazorWasmSqlite)
[![Publish](https://img.shields.io/github/actions/workflow/status/gismofx/wa-sqlite.BlazorWasmSqlite/publish.yml?style=flat-square&label=publish)](https://github.com/gismofx/wa-sqlite.BlazorWasmSqlite/actions/workflows/publish.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE.txt)
[![.NET](https://img.shields.io/badge/.NET-8.0%20%7C%2010.0-512BD4?style=flat-square)](https://dotnet.microsoft.com/en-us/download/dotnet)
[![Tests](https://img.shields.io/github/actions/workflow/status/gismofx/wa-sqlite.BlazorWasmSqlite/test.yml?style=flat-square&label=tests)](https://github.com/gismofx/wa-sqlite.BlazorWasmSqlite/actions/workflows/test.yml)

A Blazor WebAssembly Razor Class Library that provides a SQLite database backed by IndexedDB, running off the main thread in a Web Worker. Built on [`@journeyapps/wa-sqlite`](https://github.com/powersync-ja/wa-sqlite) with Dapper support.

---

## Features

- **Off-main-thread execution** — SQLite runs in a dedicated Web Worker; UI never blocks
- **IndexedDB persistence** — data survives page reloads via `IDBBatchAtomicVFS`
- **Dapper integration** — `SqliteWasmConnection` is a `DbConnection`; use Dapper as normal
- **Conventional connection pattern** — `using var connection = new SqliteWasmConnection(...)` per unit of work, as with any ADO.NET provider
- **Safe under concurrency** — overlapping callers are serialized for you; no shared connection field to hand around
- **High-performance bulk ops** — zero-deserialization upsert/insert via `SqliteWorkerPayloadBuilder`
- **JSPI / Asyncify auto-detection** — JSPI on Chrome 137+ / Edge 137+; automatic Asyncify fallback for Safari and Firefox
- **Database utilities** — check existence and delete IndexedDB databases without external state flags

---

## Browser Support

| Browser | Build | Minimum Version |
|---|---|---|
| Chrome | JSPI | 137+ |
| Edge | JSPI | 137+ |
| Safari | Asyncify (fallback) | 14+ (`indexedDB.databases()`) |
| Firefox | Asyncify (fallback) | 72+ (`indexedDB.databases()`) |

On browsers without JSPI, the library automatically loads the Asyncify build and logs a warning to the Worker console:

```
[wa-sqlite] JSPI not supported in this browser — falling back to Asyncify build. Safari and older browsers only.
```

> **Note:** Safari JSPI support is tracked in [Interop 2026](https://webkit.org/blog/17818/announcing-interop-2026/). When it ships, the library will pick it up automatically with no code changes required.

---

## Setup

### 1. Register services

In `Program.cs`:

```csharp
builder.Services.AddSqliteWasmInterop();
```

This registers Dapper type handlers for `bool`, `DateTime`, `Guid` and the numeric types.

### 2. Add the script to `index.html`

In `wwwroot/index.html`, add after `blazor.webassembly.js`:

```html
<script src="_framework/blazor.webassembly.js"></script>
<script src="_content/wa-sqlite.BlazorWasmSqlite/sqlite.min.js"></script>
```

This loads the main thread bridge and Web Worker bundle that backs `SqliteJsInterop`.

### 3. Initialize the JS module

Call once at app startup (e.g. `Program.cs` after `builder.Build()`):

```csharp
await SqliteJsInterop.InitializeAsync();
await SqliteJsInterop.InitWorkerAsync();
```

---

## Usage

### Connection

Use the conventional ADO.NET pattern — construct a connection where you need one, let `using` dispose it, and let Dapper open it:

```csharp
using var connection = new SqliteWasmConnection("MyApp", "MyFile");

var users = await connection.QueryAsync<User>("SELECT * FROM Users WHERE IsDeleted = 0");

await connection.ExecuteAsync(
    "INSERT INTO Users (Id, Name) VALUES (@Id, @Name)",
    new { Id = Guid.NewGuid().ToString(), Name = "Jane" });

var count = await connection.ExecuteScalarAsync<int>("SELECT COUNT(*) FROM Users");
```

There is no connection to cache and no `GetConnectionAsync()` helper to write. Construct one per unit of work — a component method, a service call, a sync pass — and dispose it.

No `OpenAsync` above, and none needed: Dapper's async methods open a closed connection, run the statement, and close it again. That is the intended mechanism here, not something to work around.

#### Do I need to call OpenAsync?

Only when something other than Dapper needs the database already open.

| Works without `OpenAsync` | Needs `await connection.OpenAsync()` first |
|---|---|
| `QueryAsync` / `ExecuteAsync` / `ExecuteScalarAsync` and the rest of Dapper's **async** API | `BeginTransactionAsync` |
| `QueryAllTablesAsync`, `QueryTableSchemaAsync` — Dapper underneath | `UpsertAsync` and the raw bulk paths — they read `ConnectionHandle` |
| Executing generated DDL with `ExecuteAsync` | Several statements that must share one lease |
| `DeleteDatabaseAsync` | Startup PRAGMAs you want set once (see [Tuning](#tuning-page-cache-and-durability)) |

Dapper's **synchronous** methods do not work at all — they call `Open()`, which throws. Async only.

Two Dapper calls in a row take and release the lease twice, so another caller can land between them. When a group of statements has to be indivisible, open once around them, or use a transaction.

```csharp
// Grouped under one lease
using var connection = new SqliteWasmConnection("MyApp", "MyFile");
await connection.OpenAsync();
await connection.ExecuteAsync("...");
await connection.ExecuteAsync("...");   // nothing else can interleave
```

#### What Open and Close actually mean

There is exactly one SQLite database, in one Web Worker, behind one handle. A `SqliteWasmConnection` is a handle onto that, not a database of its own.

| Call | What happens |
|---|---|
| `OpenAsync` | Acquires exclusive use of the database (a *lease*), and opens the underlying database the first time anyone asks. Later opens reuse it. |
| `Close` / `CloseAsync` / `Dispose` | Releases the lease. The database itself **stays open** for the life of the page. |
| `DeleteDatabaseAsync` | The only call that closes the database — as part of deleting it. |

Two consequences worth knowing:

- **Holding a connection open blocks other callers.** The lease is exclusive, so `using` scopes should be as short as the work they do. A caller that waits more than 30 seconds for the lease gets an exception rather than a hung page. Two connections open at once in the same call stack is the way to deadlock yourself into that timeout.
- **Statements issued under one open connection are not a transaction.** For atomicity use `BeginTransactionAsync` (below).

**Constructing a connection takes nothing.** `new SqliteWasmConnection(...)` acquires no lease, makes no worker call and has no handle — only `OpenAsync` acquires, and only once per connection. An explicit `OpenAsync` followed by Dapper calls does not acquire twice: Dapper sees the connection already open and leaves the lease alone, so the single `Dispose` at the end of the `using` is the matching release.

`Open()` — the synchronous overload — throws `NotSupportedException`. The browser cannot block the main thread on a worker round-trip. Use `OpenAsync`.

#### Do I need to close the database?

No. Nothing is lost when the tab closes: the VFS commits its IndexedDB transactions with strict durability inside SQLite's own sync, so anything committed is already durable, and anything uncommitted was never promised.

### Transactions

Pass `transaction: txn` to each Dapper operation so it is enlisted in the transaction. Use `await using` for automatic rollback if the block exits without a commit.

`BeginTransactionAsync` throws `InvalidOperationException` on a closed connection, as every ADO.NET provider does — call `OpenAsync` first. Dapper cannot do it for you here, because Dapper is not the one starting the transaction.

```csharp
using var connection = new SqliteWasmConnection("MyApp", "MyFile");
await connection.OpenAsync();

await using var txn = await connection.BeginTransactionAsync();
try
{
    await connection.ExecuteAsync(
        "INSERT INTO Users (Id, Name) VALUES (@Id, @Name)",
        new { Id = Guid.NewGuid().ToString(), Name = "Alice" },
        transaction: txn);

    await connection.ExecuteAsync(
        "INSERT INTO Users (Id, Name) VALUES (@Id, @Name)",
        new { Id = Guid.NewGuid().ToString(), Name = "Bob" },
        transaction: txn);

    await txn.CommitAsync();
}
catch
{
    await txn.RollbackAsync();
    throw;
}
// DisposeAsync also rolls back automatically if CommitAsync was never reached
```

A transaction holds the database from `BEGIN` to `COMMIT`, so nothing else can land inside it. Keep transactions short for the same reason you keep `using` scopes short.

### Upsert Extension

Convenience wrapper over the raw bulk path for moderate record counts:

```csharp
// Uses INSERT ... ON CONFLICT(Id) DO UPDATE SET
var changes = await connection.UpsertAsync("Users", records, primaryKey: "Id");
```

---

## Bulk Operations

For large datasets (thousands of rows), build the raw Worker payload directly — it eliminates per-row JSON overhead.

### Bulk Insert (initial seed)

`INSERT OR REPLACE` — fastest path for seeding into empty tables. Does not preserve existing row data on conflict.

```csharp
var payload = SqliteWorkerPayloadBuilder.BuildRawPayload("Users", rows, "Id");
using var result = await SqliteJsInterop.BulkInsertRawAsync(connection.ConnectionHandle, payload);
var changes = (int)result.GetPropertyAsDouble("totalChanges");
```

### Bulk Upsert (incremental sync)

`INSERT ... ON CONFLICT DO UPDATE SET` — preserves existing row data for non-conflicting columns. `UpsertAsync` above wraps this and is the preferred entry point.

```csharp
var payload = SqliteWorkerPayloadBuilder.BuildUpsertPayload("Users", rows, "Id");
using var result = await SqliteJsInterop.BulkInsertRawUpsertAsync(connection.ConnectionHandle, payload);
var changes = (int)result.GetPropertyAsDouble("totalChanges");
```

> Use `GetPropertyAsDouble("totalChanges")` — `GetPropertyAsInt32` silently returns 0 for float64 values returned by the Worker.

> **Note:** `SqliteJsInterop` is the raw `[JSImport]` surface and calls it makes are **not** serialized against other work. Anything issued through a `SqliteWasmConnection` — including `UpsertAsync` — is. Prefer the connection API unless you have a reason not to, and if you do call `SqliteJsInterop` directly, do it while nothing else is in flight.

---

## Schema

### Create tables

`SqliteTableCreator` generates DDL from a C# model (`[Table]`, `[SqliteColumn]`, `[ExplicitKey]`, `[Write]`). It returns the `CREATE TABLE` statement first, followed by a `CREATE INDEX` statement for each indexed column — execute them in order:

```csharp
foreach (var ddl in SqliteTableCreator.GenerateSqliteCreateTable<User>())
    await connection.ExecuteAsync(ddl);
```

TEXT columns get `COLLATE NOCASE` by default; opt out per column with `[SqliteColumn(CaseSensitive = true)]`, or globally via `TableCreatorOptions.TextColumnsCaseInsensitive`.

Views have no generator — execute the DDL directly:

```csharp
await connection.ExecuteAsync(
    "CREATE VIEW ActiveUsers AS SELECT * FROM Users WHERE IsDeleted = 0");
```

### Inspect schema

```csharp
// All tables and views in the database
IEnumerable<SqliteTableInfo> tables = await connection.QueryAllTablesAsync();
// SqliteTableInfo: Schema, Name, Type, NumberOfColumns, HasNoRowId, IsStrict, Columns

// Column metadata for a specific table
IEnumerable<SqliteColumnInfo> columns = await connection.QueryTableSchemaAsync("Users");
// SqliteColumnInfo: cid, Name, Type, NotNull, Dflt_value, Pk
```

---

## Database Utilities

### Check if a database exists

Useful for detecting first-run or migration state without relying on LocalStorage.

```csharp
bool exists = await SqliteJsInterop.CheckDatabaseExistsAsync("MyFile");
```

### Delete a database

Delete through the connection. It closes the database for you, waits for anything already in flight, and keeps everyone else out for the duration — you do not need to close first.

```csharp
using var connection = new SqliteWasmConnection("MyApp", "MyFile");
await connection.DeleteDatabaseAsync("MyFile");
// Reload the page afterwards
```

After a delete, every later use of that database throws. This is deliberate: SQLite opens with `SQLITE_OPEN_CREATE`, so a query after a delete would otherwise succeed against a brand-new empty database and quietly return no rows. Reload the page — which is what a wipe does anyway.

Deleting several databases in sequence is supported; the first delete does not brick the second.

### Database names are case-sensitive

Both names are case-sensitive, because IndexedDB and the VFS path underneath both are: `"MyFile"` and `"myfile"` are two different databases. Opening a name that differs only in case from one already stored logs a warning to the console rather than silently creating an empty second database.

---

## Tuning: page cache and durability

The library sets only two PRAGMAs for you — `page_size=8192` and `temp_store=MEMORY`. Everything else is yours to set, and the page cache is the one worth setting.

SQLite's default cache is ~2 MB. Every page outside it is an IndexedDB round-trip through the async VFS, so on large joins or a bulk seed the cache size dominates the wall clock. Raise it once after opening:

```csharp
using var connection = new SqliteWasmConnection("MyApp", "MyFile");
await connection.OpenAsync();

// Negative = KiB, positive = pages. -32768 is 32 MB.
await connection.ExecuteAsync("PRAGMA cache_size=-32768");
```

**Set it once, at startup.** PRAGMAs are scoped to the SQLite connection handle, and there is exactly one handle behind every `SqliteWasmConnection`, open for the life of the page. `Close`/`Dispose` release the lease but do not close the database — so a PRAGMA set on the first connection is still in force for every connection that comes after it, including ones constructed later in other components.

A worked example, from an offline-first app with a multi-hundred-thousand-row seed:

| Phase | `cache_size` | `synchronous` | Why |
|---|---|---|---|
| Steady state | `-32768` (32 MB) | default | Working set for normal queries and joins |
| Bulk seed / restore | `-262144` (256 MB) | `normal` | Keeps the B-tree resident; fewer IDB writes per batch |
| After the seed | `-2000` (~2 MB) | `full` | Hands the memory back; `full` makes the next close flush durably |

Raising the cache raises the WASM heap the tab holds, so it is a trade, not a free win — size it to the workload rather than to the largest number that works.

---

## Architecture

```
Blazor WASM (main thread)
    └── SqliteWasmConnection / SqliteJsInterop   [C# / [JSImport]]
            └── sqlite-interop.js                [main thread bridge]
                    └── sqlite-worker.js         [Web Worker]
                            └── IDBBatchAtomicVFS → IndexedDB
```

**Key implementation details:**

- `PRAGMA temp_store = MEMORY` — keeps SQLite's temp B-trees and sort spills in memory rather than routing them through the async IDB VFS
- `PRAGMA page_size = 8192` — halves IDB round-trips vs the SQLite default for wide-row workloads
- Both WASM binaries ship with the package; the Worker lazy-loads only the one needed at runtime (JSPI: 1.07 MiB, Asyncify: 2.17 MiB)
- **Two locks, per database.** A *lease* answers "who may use the database right now" — `OpenAsync` takes it, `Close`/`Dispose` release it. An *I/O lock* answers "may two Worker round-trips be in flight at once" — never, because the Worker's `onmessage` is an unserialized async handler and overlapping calls would interleave. Both live in a per-database session shared by every connection naming that database, so independently constructed connections coordinate correctly.
- The Worker's VFS is registered once per file and kept for the life of the page. Tearing it down on close is what produced the intermittent `Cannot read properties of undefined (reading 'xDeviceCharacteristics')` crash in earlier versions.

---

## Build

The JS Worker and webpack bundle rebuild automatically as an MSBuild pre-build step:

```
NpmJS/
  src/
    sqlite-worker.js    ← Worker entry point (JSPI/Asyncify detection lives here)
    source.js           ← Main thread bridge
  webpack.config.js
```

- The build always runs `npm run-script prod` (minified, external source maps), in Debug as well as Release — the committed `wwwroot` bundles are the shipped artifact, and a Debug build must not replace them with something unminified.
- To debug the Worker source, run `npm run-script dev` by hand, then restore `wwwroot` from git when you are done.
- Set `SkipNpmBuild=true` to suppress the npm build step (e.g. during CI restore-only passes).

## Tests

| Suite | Command | Covers |
|---|---|---|
| Unit (xunit) | `dotnet test wa-sqlite.BlazorWasmSqlite.Tests` | Runs on net8.0 and net10.0 |
| Worker (vitest) | `npm test` in `NpmJS` | `sqlite-worker.js` handlers, name diagnostics |
| E2E (Playwright) | `dotnet test wa-sqlite.BlazorWasmSqlite.E2ETests` | Real browser, JSPI enabled |

`npm test` is a Node runner and is not discovered by VSTest — run it separately from the .NET suites.
