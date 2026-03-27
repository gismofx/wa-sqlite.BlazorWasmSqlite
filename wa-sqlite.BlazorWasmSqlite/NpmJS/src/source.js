/**
 * sqlite.js — Main-thread bridge.
 * Proxies all window.sqlite.* calls to a Web Worker via postMessage.
 * The Worker owns the wa-sqlite instance and IndexedDB VFS.
 *
 * Contract: every window.sqlite method signature stays identical
 * to the original so SqliteWasmInterop.cs needs zero changes.
 */

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
 * Public API — identical signatures to the original window.sqlite.*
 * so SqliteWasmInterop.cs requires zero changes.
 */
window.sqlite = {
    initDatabase: async function () {
        await ensureWorker();
    },

    open: async function (dbName, fileName) {
        await ensureWorker();
        return await invoke('open', dbName, fileName);
    },

    close: async function (dbConnectionNumber) {
        return await invoke('close');
    },

    execute: async function (dbConn, sql, parameters) {
        return await invoke('execute', dbConn, sql, parameters || null);
    },

    query: async function (dbConn, sql, parameters) {
        return await invoke('query', dbConn, sql, parameters || null);
    },
};
