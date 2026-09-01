/**
 * Finds a database whose name differs from the requested one only in case.
 *
 * Opening a name that matches nothing is not an error - SQLite is opened with
 * SQLITE_OPEN_CREATE, so a brand-new install legitimately creates its database on first run.
 * That is also why a wrong name is so quiet: it succeeds, against a new empty database, and the
 * application simply finds no data.
 *
 * The check is deliberately limited to case, not to "similar spelling". The candidate list is
 * every IndexedDB database on the origin, which includes ones belonging to other libraries
 * entirely - edit-distance matching against that would produce confident, wrong suggestions, and
 * a wrong "did you mean" is worse than none. A case difference is exact, and it is the mistake
 * that actually happens, because the platform is case-sensitive while people are not.
 *
 * @param {string} requested - the name the caller asked to open
 * @param {string[]} existing - every IndexedDB database name on this origin
 * @returns {string|null} the real name when exactly one differs only in case, otherwise null
 */
export function findCaseMismatch(requested, existing) {
    if (!requested || !Array.isArray(existing)) return null;

    // An exact match is not a mismatch: an application may deliberately use both "MyFile" and
    // "myfile", and it must be able to open either without being told it made a mistake.
    if (existing.includes(requested)) return null;

    const lowered = requested.toLowerCase();
    const hits = existing.filter(name => typeof name === 'string' && name.toLowerCase() === lowered);

    // Exactly one, or nothing. With two candidates there is no advice worth giving - saying
    // "did you mean MyFile or myfile?" tells the caller only what they could already see.
    return hits.length === 1 ? hits[0] : null;
}
