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
            },
            {
                test: /\.css$/,
                include: /src/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    devServer: {
        port: 9000
    }
};