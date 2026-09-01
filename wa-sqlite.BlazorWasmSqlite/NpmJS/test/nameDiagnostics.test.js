import { describe, it, expect } from 'vitest';
import { findCaseMismatch } from '../src/nameDiagnostics.js';

describe('findCaseMismatch', () => {
    it('names the real database when only the case differs', () => {
        expect(findCaseMismatch('myfile', ['DVMFile', 'MyFile'])).toBe('MyFile');
    });

    it('says nothing when the requested name exists exactly', () => {
        // An application may deliberately use both spellings; opening one it owns is not a
        // mistake and must not be reported as one.
        expect(findCaseMismatch('myfile', ['MyFile', 'myfile'])).toBeNull();
    });

    it('says nothing on a first run, when the database simply does not exist yet', () => {
        // Creating a database is the normal case. Warning here would cry wolf on every install.
        expect(findCaseMismatch('MyFile', ['posthog-recordings'])).toBeNull();
    });

    it('says nothing when two candidates differ only in case from each other', () => {
        // "Did you mean MyFile or myfile?" tells the caller only what they could already see.
        expect(findCaseMismatch('MYFILE', ['MyFile', 'myfile'])).toBeNull();
    });

    it('does not guess at similar spellings', () => {
        // The candidate list is every IndexedDB database on the origin, including other
        // libraries'. Edit-distance matching against that would be confidently wrong.
        expect(findCaseMismatch('MyFile', ['MyFyle', 'MyFiles'])).toBeNull();
    });

    it('tolerates a missing or malformed list', () => {
        expect(findCaseMismatch('MyFile', [])).toBeNull();
        expect(findCaseMismatch('MyFile', null)).toBeNull();
        expect(findCaseMismatch('', ['MyFile'])).toBeNull();
    });
});
