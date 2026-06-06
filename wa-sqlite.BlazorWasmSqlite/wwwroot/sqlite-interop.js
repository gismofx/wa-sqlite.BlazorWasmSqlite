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
 * Bulk INSERT from a \0-delimited raw payload — zero C# re-serialization.
 * Uses INSERT OR REPLACE INTO — fastest path for seeding into empty tables.
 * Does not preserve existing row data on conflict. Use for initial seeding only.
 * @param {number} dbConn - connection handle
 * @param {string} payload - \0-delimited: table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0line1\0...
 * @returns {Promise<{totalChanges: number, errors: Array}>}
 */
export async function bulkInsertRaw(dbConn, payload) {
    return await window.sqlite.bulkInsertRaw(dbConn, payload);
}

/**
 * Bulk UPSERT from a \0-delimited raw payload — zero C# re-serialization.
 * Uses INSERT INTO ... ON CONFLICT DO UPDATE SET — preserves existing row data.
 * Use for incremental sync where rows may already exist locally.
 * @param {number} dbConn - connection handle
 * @param {string} payload - \0-delimited: table\0primaryKey\0rowsPerStmt\0colCount\0col1\0...\0line1\0...
 * @returns {Promise<{totalChanges: number, errors: Array}>}
 */
export async function bulkInsertRawUpsert(dbConn, payload) {
    return await window.sqlite.bulkInsertRawUpsert(dbConn, payload);
}

/**
 * Check whether an IndexedDB database with the given name exists.
 * Uses indexedDB.databases() — supported on Safari 14+, Chrome 71+, Firefox 72+.
 * Call before open() to detect legacy vs migrated database state without
 * relying on LocalStorage flags.
 * @param {string} fileName - IDB database name (matches the fileName passed to open())
 * @returns {Promise<boolean>} true if the database exists, false otherwise
 */
export async function checkDatabaseExists(fileName) {
    const dbs = await indexedDB.databases();
    const names = dbs.map(db => db.name);
    console.debug('[sqlite-interop] checkDatabaseExists: looking for "' + fileName + '", found IDBs:', names);
    return names.some(name => name === fileName);
}

/**
 * Delete an IndexedDB database by name.
 * Does NOT go through the Worker — this is a browser-level IDB operation.
 * The caller must close any open SqliteWasmConnection for this fileName first.
 * @param {string} fileName - IDB database name (matches the fileName passed to open())
 * @returns {Promise<boolean>} resolves true on success
 */
export async function deleteDatabase(fileName) {
    return await window.sqlite.deleteDatabase(fileName);
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
