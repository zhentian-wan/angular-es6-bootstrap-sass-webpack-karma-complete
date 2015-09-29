'use strict';

var webpack = require('webpack');
var here = require('path-here');

var config = {
    context: here('src'),
    output: {
        filename: 'bundle.js',
        path: here('src')
    },
    entry: {
        // Add hot reload
        app: ['../node_modules/webpack/hot/dev-server', './index.js']
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin({
        MODE: {
            production: process.env.NODE_ENV === 'production'
        }
    }), new webpack.DefinePlugin({
        ON_TEST: process.env.NODE_ENV === 'test'
    })],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            loader: 'file-loader?name=res/[name].[ext]?[hash]'
        }, {
            test: /\.html/,
            loader: 'raw'
        }, {
            test: /\.json/,
            loader: 'json'
        }]
    },
    resolve: {
        root: __dirname + '/src'
    }
};

// Modify the production path to dist folder
if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.devtool = 'source-map';
}

module.exports = config;

//# sourceMappingURL=webpack.config-compiled.js.map