var webpack = require('webpack'),
    IS_DEV_ENV = (JSON.stringify(process.env.ENV || 'ENV') != 'PROD'),
    webpackPlugins = []
;

// 通用代码文件
webpackPlugins.push(new webpack.optimize.CommonsChunkPlugin('common.js') );

// 添加全局变量
webpackPlugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development2"',
    FUCK: true
}))

// 依赖模块压缩优化
webpackPlugins.push(new webpack.optimize.DedupePlugin());

// 判断是否开发环境
if(IS_DEV_ENV){
    // 添加sourcemap
    webpackPlugins.push(new webpack.SourceMapDevToolPlugin());

    // 开发环境添加热替换
    webpackPlugins.push(new webpack.HotModuleReplacementPlugin());
}else{
    // 生产环境添加压缩
    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = webpackPlugins;
