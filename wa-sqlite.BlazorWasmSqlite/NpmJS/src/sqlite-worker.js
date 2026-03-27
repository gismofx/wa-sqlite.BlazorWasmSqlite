import SQLiteAsyncESMFactory from 'wa-sqlite/dist/wa-sqlite-async.mjs';
import * as SQLite from 'wa-sqlite';
import { IDBBatchAtomicVFS } from 'wa-sqlite/src/examples/IDBBatchAtomicVFS';

let sqlite3 = null;
let currentDb = null;

async function ensureEngine() {
    if (sqlite3) return;
    const asyncModule = await SQLiteAsyncESMFactory();
    sqlite3 = SQLite.Factory(asyncModule);
}

function resultToRow(columns, rowData) {
    const obj = {};
    for (let i = 0; i < rowData.length; i++) {
        obj[columns[i]] = rowData[i];
    }
    return obj;
}

const handlers = {
    async open(args) {
        const [dbName, fileName] = args;
        await ensureEngine();
        sqlite3.vfs_register(new IDBBatchAtomicVFS(fileName));
        currentDb = await sqlite3.open_v2(
            dbName,
            SQLite.SQLITE_OPEN_CREATE | SQLite.SQLITE_OPEN_READWRITE | SQLite.SQLITE_OPEN_URI,
            fileName
        );
        return currentDb;
    },

    async close() {
        if (currentDb === null) return;
        await sqlite3.close(currentDb);
        currentDb = null;
    },

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
};

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
