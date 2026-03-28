/**
 * sqlite-interop.js — ES module for [JSImport] interop.
 * Thin wrapper over window.sqlite (the Worker bridge).
 * Loaded via JSHost.ImportAsync() in C#.
 *
 * Unlike sqlite.min.js (loaded via <script> tag), this is an ES module
 * with named exports that [JSImport] can bind to directly.
 */

/**
 * Initialize the Worker (if not already started).
 * @returns {Promise<void>}
 */
export async function init() {
    await window.sqlite.initDatabase();
}

/**
 * Open the database.
 * @param {string} dbName
 * @param {string} fileName
 * @returns {Promise<number>} connection handle
 */
export async function open(dbName, fileName) {
    return await window.sqlite.open(dbName, fileName);
}

/**
 * Close the database.
 * @returns {Promise<void>}
 */
export async function close() {
    await window.sqlite.close();
}

/**
 * Execute a SQL statement (INSERT, UPDATE, DELETE, DDL).
 * @param {number} dbConn - connection handle
 * @param {string} sql - SQL statement
 * @param {string|null} paramsJson - JSON-serialized parameters or null
 * @returns {Promise<object>} { changes: number, error: string }
 */
export async function execute(dbConn, sql, paramsJson) {
    const params = paramsJson ? JSON.parse(paramsJson) : null;
    return await window.sqlite.execute(dbConn, sql, params);
}

/**
 * Execute a SQL query (SELECT).
 * @param {number} dbConn - connection handle
 * @param {string} sql - SQL statement
 * @param {string|null} paramsJson - JSON-serialized parameters or null
 * @returns {Promise<object>} { data: array, error: string }
 */
export async function query(dbConn, sql, paramsJson) {
    const params = paramsJson ? JSON.parse(paramsJson) : null;
    return await window.sqlite.query(dbConn, sql, params);
}

/**
 * Execute a batch of SQL statements in a single Worker round-trip.
 * @param {number} dbConn - connection handle
 * @param {string} batchJson - JSON array of {sql, params} objects
 * @returns {Promise<object>} { totalChanges: number, errors: [{index, error}] }
 */
export async function executeBatch(dbConn, batchJson) {
    const batch = JSON.parse(batchJson);
    return await window.sqlite.executeBatch(dbConn, batch);
}

/**
 * Execute a query and return results as a JSON string.
 * Avoids JSObject property-by-property marshaling for large result sets.
 * @param {number} dbConn - connection handle
 * @param {string} sql - SQL statement
 * @param {string|null} paramsJson - JSON-serialized parameters or null
 * @returns {Promise<string>} JSON string of {data: [...], error: string}
 */
export async function queryJson(dbConn, sql, paramsJson) {
    const params = paramsJson ? JSON.parse(paramsJson) : null;
    const result = await window.sqlite.query(dbConn, sql, params);
    return JSON.stringify(result);
}
