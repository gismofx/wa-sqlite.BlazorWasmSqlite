// @journeyapps/wa-sqlite is the actively-maintained PowerSync fork of rhashimoto/wa-sqlite.
// The original npm package (wa-sqlite@1.0.0) is 2 years stale and contains a WASM memory
// OOB bug that causes "disk image is malformed" corruption on large seeds.
//
// Build selection (detected at runtime in ensureEngine):
//   JSPI build (wa-sqlite-jspi.mjs)   — Chrome 137+, Edge 137+. No stack-rewriting overhead.
//   Asyncify build (wa-sqlite-async.mjs) — fallback for Safari and older browsers.
//   Safari does not yet support JSPI (tracked in Interop 2026).
//
// No static import here — factory is loaded dynamically based on WebAssembly.Suspending support.
import * as SQLite from '@journeyapps/wa-sqlite';
import { IDBBatchAtomicVFS } from '@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS';

let sqlite3 = null;
// asyncModule is module-scoped (not local to ensureEngine) so it can be passed to
// IDBBatchAtomicVFS.create(). The new API requires the Emscripten module object to
// resolve helpers like UTF8ToString that the VFS uses internally.
let asyncModule = null;
let currentDb = null;
// Map of fileName → VFS instance so we can close IDB connections when the database
// is closed. This releases the IndexedDB lock, allowing indexedDB.deleteDatabase() to succeed.
const registeredVfs = new Map();

async function ensureEngine() {
    if (sqlite3) return;
    const supportsJspi = typeof WebAssembly.Suspending !== 'undefined';
    if (!supportsJspi) {
        console.warn('[wa-sqlite] JSPI not supported in this browser — falling back to Asyncify build. Safari and older browsers only.');
    }
    const { default: SQLiteAsyncESMFactory } = supportsJspi
        ? await import(/* webpackChunkName: "wa-sqlite-jspi" */ '@journeyapps/wa-sqlite/dist/wa-sqlite-jspi.mjs')
        : await import(/* webpackChunkName: "wa-sqlite-async" */ '@journeyapps/wa-sqlite/dist/wa-sqlite-async.mjs');
    asyncModule = await SQLiteAsyncESMFactory();
    sqlite3 = SQLite.Factory(asyncModule);
}

function resultToRow(columns, rowData) {
    const obj = {};
    for (let i = 0; i < rowData.length; i++) {
        const val = rowData[i];
        // Uint8Array (BLOB) — copy out of volatile WASM memory immediately.
        // With JSPI, Module.HEAPU8 may be replaced between async suspensions,
        // leaving any subarray view stale. Slice to a standalone copy.
        obj[columns[i]] = (val instanceof Uint8Array) ? val.slice() : val;
    }
    return obj;
}

const handlers = {
    async open(args) {
        const [dbName, fileName] = args;
        await ensureEngine();

        // The map holds the in-flight PROMISE, stored before the await rather than the resolved
        // VFS stored after it. onmessage is an unserialised async handler, so two `open`
        // messages run at once; a has()-then-await-then-set sequence lets both pass the check
        // and both create a VFS. Registering a second one under a name SQLite already holds
        // evicts the first from the module's callback map, and the next VFS method dispatched
        // on the evicted one reads a property off undefined - which is where
        // "Cannot read properties of undefined (reading 'xDeviceCharacteristics')" comes from.
        let vfsPromise = registeredVfs.get(fileName);
        if (!vfsPromise) {
            vfsPromise = IDBBatchAtomicVFS.create(fileName, asyncModule)
                .then(vfs => {
                    sqlite3.vfs_register(vfs);
                    return vfs;
                })
                .catch(err => {
                    // Do not leave a rejected promise cached, or the file can never be opened
                    // again for the life of the worker.
                    registeredVfs.delete(fileName);
                    throw err;
                });
            registeredVfs.set(fileName, vfsPromise);
        }
        await vfsPromise;

        currentDb = await sqlite3.open_v2(
            dbName,
            SQLite.SQLITE_OPEN_CREATE | SQLite.SQLITE_OPEN_READWRITE | SQLite.SQLITE_OPEN_URI,
            fileName
        );
        return currentDb;
    },

    // Closes the database and leaves the VFS alone. Tearing the VFS down here was the other
    // half of the same defect: it closed the IDB connections and cleared the map while SQLite
    // still held the VFS by name, so the two sides disagreed from that moment on and the next
    // open registered a duplicate. VFS lifetime belongs to the worker, not to a database
    // open/close - releasing it is only ever wanted before deleting the file, which is what
    // releaseFile is for.
    async close() {
        if (currentDb === null) return;
        await sqlite3.close(currentDb);
        currentDb = null;
    },

    // Closes the VFS's IndexedDB connections and forgets it, so indexedDB.deleteDatabase() is
    // not blocked. Only the delete path should call this: afterwards SQLite still holds a VFS
    // by this name whose JS side is gone, so the file must not be opened again without a
    // reload. Callers get that for free - deleting a database is always followed by one.
    async releaseFile(args) {
        const [fileName] = args;
        const vfsPromise = registeredVfs.get(fileName);
        if (!vfsPromise) return;
        registeredVfs.delete(fileName);
        const vfs = await vfsPromise;
        vfs.close();
    },

    /**
     * execute — run a single SQL statement (INSERT/UPDATE/DELETE/DDL).
     * @param {[number, string, Object|null]} args - [dbConn, sql, parameters]
     * @returns {{ changes: number, response: string, data: string, error: string }}
     */
    async execute(args) {
        const [dbConn, sql, parameters] = args;
        const result = { changes: 0, response: null, data: '', error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== SQLite.SQLITE_OK) {
                        result.error = 'Unable to prepare statement. Check your syntax or parameters';
                        return result;
                    }
                }
                while (await sqlite3.step(stmt) === SQLite.SQLITE_ROW) {}
                result.response = 'SQLITE_DONE';
                result.changes = sqlite3.changes(dbConn);
            }
        } catch (error) {
            result.error = error.message;
        }
        return result;
    },

    /**
     * query — execute a SQL SELECT and return all rows as objects.
     * @param {[number, string, Object|null]} args - [dbConn, sql, parameters]
     * @returns {{ data: Object[], error: string }}
     */
    async query(args) {
        const [dbConn, sql, parameters] = args;
        const result = { data: [], error: '' };
        try {
            for await (const stmt of sqlite3.statements(dbConn, sql)) {
                if (parameters != null) {
                    const bindResult = await sqlite3.bind_collection(stmt, parameters);
                    if (bindResult !== SQLite.SQLITE_OK) {
                        result.error = 'Unable to prepare statement';
                        return result;
                    }
                }
                try {
                    let columns;
                    while (await sqlite3.step(stmt) === SQLite.SQLITE_ROW) {
                        columns = columns ?? sqlite3.column_names(stmt);
                        const row = sqlite3.row(stmt);
                        result.data.push(resultToRow(columns, row));
                    }
                } catch (error) {
                    result.error = error.message;
                }
            }
        } catch (error) {
            result.error = error.message;
        }
        return result;
    },

    /**
     * bulkInsertRawUpsert — upsert from \0-delimited raw payload.
     * Uses INSERT INTO ... ON CONFLICT(pk) DO UPDATE SET — preserves existing row data.
     * Use for incremental sync where rows may already exist locally.
     * For initial seeding into empty tables, use bulkInsertRaw instead.
     * @param {[number, string]} args - [dbConn, payload]
     * @returns {{ totalChanges: number, errors: Array }}
     */
    async bulkInsertRawUpsert(args) {
        return await handlers._bulkInsertRawImpl(args, true);
    },

    /**
     * bulkInsertRaw — zero-deserialization seed path.
     * Uses INSERT OR REPLACE INTO — no index lookup, fastest path for empty tables.
     * Use for initial seeding only. For incremental sync, use bulkInsertRawUpsert.
     * @param {[number, string]} args - [dbConn, payload]
     * @returns {{ totalChanges: number, errors: Array }}
     */
    async bulkInsertRaw(args) {
        return await handlers._bulkInsertRawImpl(args, false);
    },

    async _bulkInsertRawImpl(args, isUpsert) {
        const [dbConn, payload] = args;

        // Parse \0-delimited format (no outer JSON — zero C# encoding overhead)
        // Header: table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0colN\0
        // Body:   rawLine1\0rawLine2\0... (each is a full NDJSON row line)
        const parts = payload.split('\0');
        let i = 0;
        const table      = parts[i++];
        const primaryKey = parts[i++];
        const rowsPerStmt = parseInt(parts[i++]);
        const colCount   = parseInt(parts[i++]);
        const columns    = parts.slice(i, i + colCount);
        i += colCount;
        // Remaining parts are raw NDJSON lines (last element is empty string after trailing \0)
        const totalLines = parts.length - 1 - i;

        if (totalLines === 0) return { totalChanges: 0, errors: [] };

        const colList = columns.join(',');
        let totalChanges = 0;
        const errors = [];

        const updateSet = isUpsert
            ? columns.filter(c => c !== primaryKey).map(c => `${c}=excluded.${c}`).join(',')
            : null;

        const sqlCache = new Map();
        function getSql(rowCount) {
            if (sqlCache.has(rowCount)) return sqlCache.get(rowCount);
            const placeholders = [];
            for (let r = 0; r < rowCount; r++) {
                placeholders.push('(' + new Array(colCount).fill('?').join(',') + ')');
            }
            const sql = isUpsert
                ? `INSERT INTO ${table} (${colList}) VALUES ${placeholders.join(',')} ON CONFLICT(${primaryKey}) DO UPDATE SET ${updateSet}`
                : `INSERT OR REPLACE INTO ${table} (${colList}) VALUES ${placeholders.join(',')}`;
            sqlCache.set(rowCount, sql);
            return sql;
        }

        // Each part is a raw NDJSON line — may be "row" (single) or "rows" (bundle).
        // Expand all lines into a flat params array for the current statement batch.
        // JS handles expansion natively at V8 speed — zero C# per-line cost.
        const allParams = [];
        let totalRows = 0;
        for (let li = 0; li < totalLines; li++) {
            const lineObj = JSON.parse(parts[i + li]);
            if (lineObj.rows) {
                for (const dataObj of lineObj.rows) {
                    for (let c = 0; c < colCount; c++) {
                        const val = dataObj[columns[c]];
                        allParams.push(val === true ? 1 : val === false ? 0 : (val !== undefined ? val : null));
                    }
                    totalRows++;
                }
            } else {
                const dataObj = lineObj.data ?? lineObj;
                for (let c = 0; c < colCount; c++) {
                    const val = dataObj[columns[c]];
                    allParams.push(val === true ? 1 : val === false ? 0 : (val !== undefined ? val : null));
                }
                totalRows++;
            }
        }

        // Execute in rowsPerStmt-sized statement batches
        let rowIndex = 0;
        while (rowIndex < totalRows) {
            const stmtRowCount = Math.min(rowsPerStmt, totalRows - rowIndex);
            const sql = getSql(stmtRowCount);
            const params = allParams.slice(rowIndex * colCount, (rowIndex + stmtRowCount) * colCount);

            try {
                for await (const stmt of sqlite3.statements(dbConn, sql)) {
                    const bindResult = await sqlite3.bind_collection(stmt, params);
                    if (bindResult !== SQLite.SQLITE_OK) {
                        errors.push({ index: rowIndex, error: 'bind_collection failed' });
                        break;
                    }
                    while (await sqlite3.step(stmt) === SQLite.SQLITE_ROW) {}
                    totalChanges += sqlite3.changes(dbConn);
                }
            } catch (error) {
                errors.push({ index: rowIndex, error: error.message });
            }

            rowIndex += stmtRowCount;
        }

        return { totalChanges, errors, firstError: errors.length > 0 ? errors[0].error : null };
    },
};

// Exported so the handlers can be exercised directly by a unit test. A race is not something
// you can assert against a real browser - you can only watch it sometimes happen. With the
// engine and the VFS substituted, a test controls the interleaving and the same defect becomes
// an integer that is wrong every run.
export { handlers };

export const __testing = {
    /** Stand in for ensureEngine, which would otherwise fetch and instantiate a wasm module. */
    setEngine(fakeSqlite3, fakeModule) {
        sqlite3 = fakeSqlite3;
        asyncModule = fakeModule ?? {};
    },
    reset() {
        sqlite3 = null;
        asyncModule = null;
        currentDb = null;
        registeredVfs.clear();
    },
    get registeredVfs() { return registeredVfs; },
    get currentDb() { return currentDb; },
};

// Only wire up the worker plumbing when actually running as a worker. Under a test host there
// is no `self`, and an unguarded registration would throw at import time.
if (typeof self !== 'undefined' && typeof self.postMessage === 'function') {
    self.onerror = function (e) {
        console.error('[sqlite-worker] uncaught error:', e.message || e);
    };

    self.onunhandledrejection = function (e) {
        console.error('[sqlite-worker] unhandled rejection:', e.reason);
    };

    self.onmessage = async function (e) {
        const { id, method, args } = e.data;
        const handler = handlers[method];
        if (!handler) {
            self.postMessage({ id, error: `Unknown method: ${method}` });
            return;
        }
        try {
            const result = await handler(args);
            self.postMessage({ id, result });
        } catch (err) {
            self.postMessage({ id, error: err.message || String(err) });
        }
    };

    self.postMessage({ type: 'ready' });
}
