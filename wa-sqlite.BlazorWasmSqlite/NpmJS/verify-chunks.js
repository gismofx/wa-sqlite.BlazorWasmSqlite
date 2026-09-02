/**
 * Fails the build if sqlite-worker.js asks for a lazy chunk that is not on disk beside it.
 *
 * This is the check that was missing when 1.0.1, 1.1.0 and 1.1.1 were published. The worker
 * loads its wa-sqlite build with import(), which webpack compiles into importScripts() of a
 * filename baked into the worker's runtime. If that filename does not match what actually
 * shipped, the failure surfaces only at runtime, in a Web Worker, as a 404 that rejects the
 * boot promise - so a consuming Blazor app hangs before any route renders and the package
 * looks fine to everyone who built it. Cheap to assert here, expensive to find later.
 */
const fs = require('fs');
const path = require('path');

const wwwroot = path.resolve(__dirname, '../wwwroot');
const workerPath = path.join(wwwroot, 'sqlite-worker.js');
const src = fs.readFileSync(workerPath, 'utf8');

// Pull out webpack's chunk-URL builder (__webpack_require__.u) and evaluate it, rather than
// pattern-matching filenames. Evaluating means this keeps working whatever naming scheme the
// config uses - stable names today, [contenthash] if that ever comes back.
const marker = '.u=';
const at = src.indexOf(marker);
if (at === -1) {
    console.error('verify-chunks: no __webpack_require__.u found in sqlite-worker.js.');
    console.error('The worker may no longer lazy-load its chunks; update this check if that is intended.');
    process.exit(1);
}

let i = at + marker.length;
let depth = 0;
const start = i;
for (; i < src.length; i++) {
    const c = src[i];
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') {
        if (depth === 0) break;
        depth--;
    } else if ((c === ',' || c === ';') && depth === 0) break;
}
const expr = src.slice(start, i);

let urlFor;
try {
    urlFor = new Function('return (' + expr + ')')();
} catch (err) {
    console.error('verify-chunks: could not evaluate the chunk-URL builder: ' + err.message);
    process.exit(1);
}

const ids = [...new Set([...expr.matchAll(/(\d+)\s*:/g)].map((m) => m[1]))];
if (ids.length === 0) {
    console.error('verify-chunks: found no chunk ids to check. Expected at least the jspi/async pair.');
    process.exit(1);
}

const missing = [];
for (const id of ids) {
    let name;
    try {
        name = urlFor(Number(id));
    } catch (err) {
        console.error('verify-chunks: chunk-URL builder threw for id ' + id + ': ' + err.message);
        process.exit(1);
    }
    if (!fs.existsSync(path.join(wwwroot, name))) missing.push(name);
}

if (missing.length > 0) {
    console.error('verify-chunks: sqlite-worker.js references chunk files that are not in wwwroot:');
    for (const m of missing) console.error('  missing: ' + m);
    console.error('Present in wwwroot: ' + fs.readdirSync(wwwroot).filter((f) => f.endsWith('.js')).join(', '));
    console.error('Shipping this would 404 inside the Web Worker and hang the consuming app at boot.');
    process.exit(1);
}

console.log('verify-chunks: ok - ' + ids.length + ' chunk reference(s) resolve to files in wwwroot.');
