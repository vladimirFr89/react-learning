module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                loader: 'babel-loader'
            }
        ]
    }
};