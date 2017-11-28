/**
 * webpack配置文件
 * 2017-11-27 by chenfeng
 */
const webpack = require('webpack')

module.exports = {
    entry: './javascript/es6.js', // 入口配置
    output: { // 输出配置
        filename: './javascript/bundle.js'
    },
    module: { // 模块配置
        rules: [ // 规则(可配置多个)
            {
                test: /\.js?/, // 是否为js文件
                exclude: /node_modules/, // 排除特定目录的js文件
                use: {
                    loader: 'babel-loader', // 使用babel-loader处理js文件
                    options: { // 选项
                        presets: ['env'] // 设置使用的babel映射(转换es2016、es2017)
                    }
                }
            }
        ]
    }
}
