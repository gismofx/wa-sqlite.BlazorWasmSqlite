import { describe, it, expect, beforeEach, vi } from 'vitest';

// The VFS is the collaborator, so it is substituted rather than instantiated: the real one opens
// IndexedDB, which does not exist here and is not what this is about.
const createSpy = vi.fn();
vi.mock('@journeyapps/wa-sqlite/src/examples/IDBBatchAtomicVFS', () => ({
    IDBBatchAtomicVFS: { create: (...args) => createSpy(...args) },
}));
vi.mock('@journeyapps/wa-sqlite', () => ({
    Factory: () => ({}),
    SQLITE_OPEN_CREATE: 4,
    SQLITE_OPEN_READWRITE: 2,
    SQLITE_OPEN_URI: 64,
}));

const { handlers, __testing } = await import('../src/sqlite-worker.js');

/** Resolves when the test says so, so an await inside the handler can be held open. */
function deferred() {
    let resolve;
    const promise = new Promise(r => { resolve = r; });
    return { promise, resolve };
}

function fakeEngine() {
    return {
        vfs_register: vi.fn(),
        open_v2: vi.fn(async () => 1),
        close: vi.fn(async () => {}),
    };
}

describe('handlers.open', () => {
    let sqlite3;

    beforeEach(() => {
        __testing.reset();
        createSpy.mockReset();
        sqlite3 = fakeEngine();
        __testing.setEngine(sqlite3);
    });

    it('creates and registers one VFS when two opens race for the same file', async () => {
        // Hold the VFS construction open so the second open arrives while the first is still
        // inside its await. This is the interleaving the browser produces by accident: the
        // worker's onmessage is an unserialised async handler, so two `open` messages run at
        // once.
        const held = deferred();
        createSpy.mockReturnValueOnce(held.promise).mockResolvedValue({ close: vi.fn() });

        const first = handlers.open(['db', 'file']);
        const second = handlers.open(['db', 'file']);

        held.resolve({ close: vi.fn() });
        await Promise.all([first, second]);

        // A second VFS registered under a name SQLite already holds evicts the first from the
        // module's callback map. The next VFS method dispatched on the evicted one reads a
        // property off undefined - "Cannot read properties of undefined (reading
        // 'xDeviceCharacteristics')", which is the defect this whole change exists to remove.
        expect(createSpy).toHaveBeenCalledTimes(1);
        expect(sqlite3.vfs_register).toHaveBeenCalledTimes(1);
    });

    it('does not re-create the VFS on a later open of the same file', async () => {
        createSpy.mockResolvedValue({ close: vi.fn() });

        await handlers.open(['db', 'file']);
        await handlers.open(['db', 'file']);

        expect(createSpy).toHaveBeenCalledTimes(1);
    });
});

describe('handlers.close', () => {
    let sqlite3;

    beforeEach(() => {
        __testing.reset();
        createSpy.mockReset();
        createSpy.mockResolvedValue({ close: vi.fn() });
        sqlite3 = fakeEngine();
        __testing.setEngine(sqlite3);
    });

    it('leaves the VFS registered so a re-open cannot register a duplicate', async () => {
        await handlers.open(['db', 'file']);
        await handlers.close();
        await handlers.open(['db', 'file']);

        // close() used to call vfs.close() and clear the map while SQLite still held the VFS by
        // name, so the two sides disagreed from that moment on and the next open registered a
        // duplicate. VFS lifetime belongs to the worker, not to a database open/close.
        expect(createSpy).toHaveBeenCalledTimes(1);
        expect(sqlite3.vfs_register).toHaveBeenCalledTimes(1);
    });
});
