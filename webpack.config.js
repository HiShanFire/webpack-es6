var webpack = require('webpack'),
    path = require('path')
;

var webpackPlugins = require('./$webpack/plugins')



module.exports = {
    entry: {
        app : [
            'webpack-dev-server/client?http://127.0.0.1:7777', // WebpackDevServer host and port
            'webpack/hot/dev-server',
            './www/js/test.js'
        ]
    },
    output: {
        publicPath: "/js",
        path: path.resolve(__dirname, "build/js"),
        filename: '[name].js'
    },
    devServer : {
        contentBase: './build',
        port: 7777
    },
    // resolve: {
    //
    // },
    // module: {
    //
    // },
    plugins: webpackPlugins
}
