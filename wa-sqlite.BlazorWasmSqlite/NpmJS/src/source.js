/**
 * sqlite.js — Main-thread bridge.
 * Proxies all window.sqlite.* calls to a Web Worker via postMessage.
 * The Worker owns the wa-sqlite instance and IndexedDB VFS.
 *
 * Contract: every window.sqlite method signature stays identical
 * to the original so SqliteWasmInterop.cs needs zero changes.
 */

import { findCaseMismatch } from './nameDiagnostics.js';

let worker = null;
let nextId = 0;
const pending = new Map(); // id → { resolve, reject }
let workerReady = null;    // Promise that resolves when Worker posts 'ready'

/**
 * Spawn the Worker (once). Returns a Promise that resolves when
 * the Worker signals it has loaded successfully.
 */
function ensureWorker() {
    if (workerReady) return workerReady;

    workerReady = new Promise((resolve, reject) => {
        try {
            // Resolve Worker URL relative to this script's location
            // (Blazor serves RCL assets from _content/{PackageName}/)
            const scriptEl = document.currentScript || document.querySelector('script[src*="sqlite.min.js"]');
            const baseUrl = scriptEl.src.replace(/\/[^/]+$/, '/');
            worker = new Worker(baseUrl + 'sqlite-worker.js', { name: 'sqlite-worker' });
        } catch (err) {
            reject(err);
            return;
        }

        worker.onmessage = function (e) {
            const msg = e.data;

            // Worker startup signal
            if (msg.type === 'ready') {
                resolve();
                return;
            }

            // Correlated response
            const entry = pending.get(msg.id);
            if (!entry) return;
            pending.delete(msg.id);

            if (msg.error) {
                entry.reject(new Error(msg.error));
            } else {
                entry.resolve(msg.result);
            }
        };

        worker.onerror = function (err) {
            reject(err);
        };
    });

    return workerReady;
}

/**
 * Send a command to the Worker and return a Promise for the result.
 */
function invoke(method, ...args) {
    const id = nextId++;
    return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        worker.postMessage({ id, method, args });
    });
}

/**
 * Say something when the requested database does not exist but one differing only in case does.
 *
 * SQLite opens with SQLITE_OPEN_CREATE, so a wrong name does not fail - it quietly creates a new
 * empty database and the application finds no data. IndexedDB names are case-sensitive and
 * people are not, so this is the mistake that actually happens. Diagnostic only: it never
 * changes which database is opened, because an application may legitimately own both spellings.
 */
async function warnOnCaseMismatch(fileName) {
    try {
        if (typeof indexedDB.databases !== 'function') return;
        const names = (await indexedDB.databases()).map(d => d.name);
        const actual = findCaseMismatch(fileName, names);
        if (actual) {
            console.warn(
                `[wa-sqlite] No IndexedDB database named '${fileName}'. One named '${actual}' ` +
                `exists - these names are case-sensitive, so opening '${fileName}' will create a ` +
                `new empty database rather than open '${actual}'.`);
        }
    } catch {
        // A diagnostic must never be able to stop an open from happening.
    }
}

/**
 * Public API — identical signatures to the original window.sqlite.*
 * so SqliteWasmInterop.cs requires zero changes.
 */
window.sqlite = {
    initDatabase: async function () {
        await ensureWorker();
    },

    open: async function (dbName, fileName) {
        await ensureWorker();
        await warnOnCaseMismatch(fileName);
        return await invoke('open', dbName, fileName);
    },

    close: async function (dbConnectionNumber) {
        return await invoke('close');
    },

    /**
     * Execute a SQL statement (INSERT, UPDATE, DELETE, DDL).
     * @param {number} dbConn - connection handle
     * @param {string} sql - SQL statement
     * @param {Object|null} parameters - bound parameters or null
     * @returns {Promise<{changes: number, error: string}>}
     */
    execute: async function (dbConn, sql, parameters) {
        return await invoke('execute', dbConn, sql, parameters || null);
    },

    /**
     * Execute a SQL query (SELECT).
     * @param {number} dbConn - connection handle
     * @param {string} sql - SQL statement
     * @param {Object|null} parameters - bound parameters or null
     * @returns {Promise<{data: Array, error: string}>}
     */
    query: async function (dbConn, sql, parameters) {
        return await invoke('query', dbConn, sql, parameters || null);
    },

    /**
     * Bulk INSERT from a \0-delimited raw payload — zero C# re-serialization.
     * Uses INSERT OR REPLACE INTO — fastest path for seeding into empty tables.
     * Payload built by SqliteWorkerPayloadBuilder.BuildRawPayload.
     * @param {number} dbConn - connection handle
     * @param {string} payloadJson - \0-delimited payload string
     * @returns {Promise<{totalChanges: number, errors: Array}>}
     */
    bulkInsertRaw: async function (dbConn, payloadJson) {
        return await invoke('bulkInsertRaw', dbConn, payloadJson);
    },

    /**
     * Bulk UPSERT from a \0-delimited raw payload — zero C# re-serialization.
     * Uses INSERT INTO ... ON CONFLICT DO UPDATE SET — for incremental sync.
     * Payload built by SqliteWorkerPayloadBuilder.BuildRawPayload or BuildUpsertPayload.
     * @param {number} dbConn - connection handle
     * @param {string} payloadJson - \0-delimited payload string
     * @returns {Promise<{totalChanges: number, errors: Array}>}
     */
    bulkInsertRawUpsert: async function (dbConn, payloadJson) {
        return await invoke('bulkInsertRawUpsert', dbConn, payloadJson);
    },

    /**
     * Close the database, release the file, then delete it.
     *
     * The delete itself is a main-thread IndexedDB call and does not go through the Worker, but
     * the close and the VFS release do — so this is the one place both channels meet, and the
     * only place that can order them correctly. It used to be documented as the caller's job
     * ("close any open connection first, or the delete will be blocked"), which is a contract
     * every caller can get wrong; folding it in makes it impossible to get wrong.
     *
     * After this the file is gone but SQLite still holds a VFS registered under its name whose
     * JS side has been torn down, so the file must not be reopened without a reload. Callers get
     * that for free: deleting a database is always followed by one.
     *
     * @param {string} fileName - IDB database name (matches the fileName passed to open())
     * @returns {Promise<boolean>} resolves true on success
     */
    deleteDatabase: async function (fileName) {
        await ensureWorker();
        await invoke('close');
        await invoke('releaseFile', fileName);
        return new Promise((resolve, reject) => {
            const req = indexedDB.deleteDatabase(fileName);
            req.onsuccess = () => resolve(true);
            req.onerror   = () => reject(req.error);
            req.onblocked = () => reject(new Error(`IDB delete blocked: close all connections to '${fileName}' first`));
        });
    },
};
