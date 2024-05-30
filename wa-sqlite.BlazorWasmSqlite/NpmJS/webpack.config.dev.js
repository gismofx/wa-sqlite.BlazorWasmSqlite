const path = require('path');
//const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    cache: false,
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/source.js',
    output: {
        path: path.resolve(__dirname, '../wwwroot/'),
        filename: 'TUI.blazor_calendar.min.js',
    },
    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: 'TUI.blazorCalendar.css'
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