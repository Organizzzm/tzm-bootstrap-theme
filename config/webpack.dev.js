const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
});