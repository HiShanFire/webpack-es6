var webpack = require('webpack'),
    commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js'),
    path = require('path')
;

module.exports = {
    entry: {
        app: []
    },
    output: {
        filename: '[name].js'
    },
    resolve: {

    },
    module: {

    },
    plugins: [
        commonsPlugin
    ]
}
