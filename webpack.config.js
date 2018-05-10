'use strict';
let path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "main.js",
        publicPath: "dist/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                loader: 'babel-loader'
            }
        ]
    },

    devServer: {
        port: 9000
    }
};