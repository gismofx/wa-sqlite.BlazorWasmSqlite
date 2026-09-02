const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const outputPath = path.resolve(__dirname, '../wwwroot/');

const common = (isProd) => ({
    devtool: isProd ? 'source-map' : 'inline-source-map',
    resolve: { extensions: ['.js'] },
    module: {
        rules: [
            { test: /\.wasm$/, type: 'asset/resource' },
        ],
    },
    optimization: {
        minimize: isProd,
        minimizer: [
            new TerserPlugin({
                terserOptions: { keep_classnames: true, keep_fnames: true },
            }),
        ],
    },
});

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';

    return [
        // Bridge — runs on main thread
        {
            ...common(isProd),
            name: 'bridge',
            mode: isProd ? 'production' : 'development',
            entry: './src/source.js',
            output: {
                path: outputPath,
                filename: 'sqlite.min.js',
                sourceMapFilename: '[file].map',
            },
        },
        // Worker — runs in Web Worker, self-contained
        {
            ...common(isProd),
            name: 'worker',
            mode: isProd ? 'production' : 'development',
            target: 'webworker',
            entry: './src/sqlite-worker.js',
            output: {
                path: outputPath,
                filename: 'sqlite-worker.js',
                // Deliberately NOT [contenthash]. The lazy-loaded chunks bundle
                // @journeyapps/wa-sqlite's ESM dist, which uses import.meta.url; webpack inlines
                // that as an absolute file:// URL of the module ON THE BUILD MACHINE. The chunk
                // body therefore contains the builder's directory layout, so [contenthash] differs
                // on every machine - Chad's box, a CI runner and a clone at another path each
                // produce a different filename for byte-identical logic.
                //
                // That alone is survivable; what shipped broken twice (1.1.0, 1.1.1) is the
                // interaction with packing. wwwroot is committed, so the package carries the
                // chunk files built on whoever committed last. A CI build regenerates
                // sqlite-worker.js (fixed name, so it is in MSBuild's already-evaluated item list
                // and its fresh content ships) with a chunk map pointing at ITS hashes, while the
                // newly-named chunk files it emitted are not in that item list and are silently
                // dropped. Consumers get a worker that importScripts() a 404, which hangs the
                // Blazor app at boot before any route renders.
                //
                // A stable name cannot drift from what is committed, so the package is always
                // self-consistent no matter where it is built. These assets are fetched by the
                // worker at runtime and served with ETags; sqlite-worker.js itself has always been
                // unhashed, so this matches the caching story the library already relies on.
                chunkFilename: '[name].js',
                sourceMapFilename: '[file].map',
            },
        },
    ];
};