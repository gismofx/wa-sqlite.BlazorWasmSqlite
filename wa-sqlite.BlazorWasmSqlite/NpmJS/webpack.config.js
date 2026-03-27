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
                sourceMapFilename: '[file].map',
            },
        },
    ];
};