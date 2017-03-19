var path = require('path');
var webpack = require('webpack');

var plugins = [];
if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
    }))
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_moduels/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: plugins
}
