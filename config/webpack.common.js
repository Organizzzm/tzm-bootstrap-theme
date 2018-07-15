const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const path = require('path');

module.exports = {
    entry: {
        library: './src/library/scripts/index.js'
    },
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: "pug-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/library/index.pug',
            filename: 'index.html'
        }),
        new WebpackCleanupPlugin('./dist', {})
    ]
};