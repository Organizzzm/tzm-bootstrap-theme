const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/src/index.html'
        })
    ]
};