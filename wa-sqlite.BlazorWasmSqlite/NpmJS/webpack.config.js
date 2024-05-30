const path = require('path');
//const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    cache: false,
    mode: 'production',
    devtool: 'source-map',
    entry: './src/source.js',
    output: {
        library: {
            type: "module",
            name: "sqliteWasm"
        },
        libraryTarget: 'window',
        libraryExport: 'default',
        path: path.resolve(__dirname, '../wwwroot/'),
        filename: 'sqlite.min.js',
        sourceMapFilename: "[file].map",
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: 'na.css'
            })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true
                }
            })
        ]
    },

};