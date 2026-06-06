# wa-sqlite.BlazorWasmSqlite

A Blazor WebAssembly Razor Class Library that provides a SQLite database backed by IndexedDB, running off the main thread in a Web Worker. Built on [`@journeyapps/wa-sqlite`](https://github.com/powersync-ja/wa-sqlite) with Dapper support.

---

## Features

- **Off-main-thread execution** — SQLite runs in a dedicated Web Worker; UI never blocks
- **IndexedDB persistence** — data survives page reloads via `IDBBatchAtomicVFS`
- **Dapper integration** — `SqliteWasmConnection` implements `IDbConnection`; use Dapper as normal
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

This registers Dapper type handlers for `bool`, `DateTime`, and `Guid` SQLite mappings.

### 2. Initialize the JS module

Call once at app startup (e.g. `Program.cs` after `builder.Build()`):

```csharp
await SqliteJsInterop.InitializeAsync();
await SqliteJsInterop.InitWorkerAsync();
```

---

## Usage

### Connection

`SqliteWasmConnection` is the primary API. It implements `IDbConnection` and is designed to be long-lived — open once and reuse across operations rather than opening per-query.

```csharp
// Recommended: persistent connection field in a Blazor component or service
private SqliteWasmConnection? _conn;

private async Task<SqliteWasmConnection> GetConnectionAsync()
{
    if (_conn == null || _conn.State != ConnectionState.Open)
    {
        _conn = new SqliteWasmConnection("MyApp", "MyFile");
        await _conn.OpenAsync();
    }
    return _conn;
}
```

Then use Dapper as normal:

```csharp
var conn = await GetConnectionAsync();

var users = await conn.QueryAsync<User>("SELECT * FROM Users WHERE IsDeleted = 0");

await conn.ExecuteAsync(
    "INSERT INTO Users (Id, Name) VALUES (@Id, @Name)",
    new { Id = Guid.NewGuid().ToString(), Name = "Jane" });

var count = await conn.ExecuteScalarAsync<int>("SELECT COUNT(*) FROM Users");
```

### Transactions

```csharp
var txn = await conn.BeginTransactionAsync();
await conn.ExecuteAsync("INSERT INTO ...");
await txn.CommitAsync(); // or txn.RollbackAsync()
```

### Upsert Extension

Convenience wrapper over the raw bulk path for moderate record counts:

```csharp
// Uses INSERT ... ON CONFLICT(Id) DO UPDATE SET
var changes = await conn.UpsertAsync<User>("Users", records, primaryKey: "Id");
```

---

## Bulk Operations

For large datasets (thousands of rows), use the raw Worker payload path directly — it eliminates per-row JSON overhead.

### Bulk Insert (initial seed)

`INSERT OR REPLACE` — fastest path for seeding into empty tables. Does not preserve existing row data on conflict.

```csharp
var payload = SqliteWorkerPayloadBuilder.BuildRawPayload("Users", rows, "Id");
using var result = await SqliteJsInterop.BulkInsertRawAsync(conn.ConnectionHandle, payload);
var changes = (int)result.GetPropertyAsDouble("totalChanges");
```

### Bulk Upsert (incremental sync)

`INSERT ... ON CONFLICT DO UPDATE SET` — preserves existing row data for non-conflicting columns.

```csharp
var payload = SqliteWorkerPayloadBuilder.BuildUpsertPayload("Users", rows, "Id");
using var result = await SqliteJsInterop.BulkInsertRawUpsertAsync(conn.ConnectionHandle, payload);
var changes = (int)result.GetPropertyAsDouble("totalChanges");
```

> Use `GetPropertyAsDouble("totalChanges")` — `GetPropertyAsInt32` silently returns 0 for float64 values returned by the Worker.

---

## Schema

### Create tables and views

```csharp
// Create a table from a C# model ([Table] / [SqliteColumn] attributes)
await SqliteTableCreator.CreateTableAsync<User>(conn);

// Create a view
await SqliteViewCreator.CreateViewAsync(conn, "ActiveUsers",
    "SELECT * FROM Users WHERE IsDeleted = 0");
```

### Inspect schema

```csharp
// All tables and views in the database
var tables = await conn.QueryAllTablesAsync();

// Column metadata for a specific table
var columns = await conn.QueryTableSchemaAsync("Users");
// SqliteColumnInfo: Name, Type, NotNull, Pk, Dflt_value
```

---

## Database Utilities

### Check if a database exists

Useful for detecting first-run or migration state without relying on LocalStorage.

```csharp
bool exists = await SqliteJsInterop.CheckDatabaseExistsAsync("MyFile");
```

### Delete a database

The connection must be closed before deletion — otherwise the IndexedDB lock blocks the operation.

```csharp
await conn.CloseAsync();
await SqliteJsInterop.DeleteDatabaseAsync("MyFile");
// Navigate or reload after deletion
```

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

- `PRAGMA temp_store = MEMORY` — prevents temp B-tree writes from routing through the async IDB VFS, which causes crashes on secondary VFS files
- `PRAGMA page_size = 8192` — halves IDB round-trips vs the SQLite default for wide-row workloads
- `PRAGMA cache_size = -262144` — 256 MB in-memory cache for sustained batch-atomic performance through large tables
- Both WASM binaries ship with the package; the Worker lazy-loads only the one needed at runtime (JSPI: 1.07 MiB, Asyncify: 2.17 MiB)
- All Worker operations are serialized through a `SemaphoreSlim` on the C# side to prevent concurrent `await` calls from delivering responses to the wrong awaiter

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

- **Development:** `npm run dev` (inline source maps)
- **Production:** `npm run prod` (minified, external source maps)

Set `SkipNpmBuild=true` to suppress the npm build step (e.g. during CI restore-only passes).
