/**
 * webpack基本配置
 * Created by chenfeng on 2017/11/28.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'), // 入口
    output: { // 输出
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle-[hash].js' // 不要在这里指定绝对路径，path中会指定
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.ejs']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
                exclude: /node_modules/
            },{
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    externals: {
        ES6Promise: true,
        React: true,
        ReactDOM: true,
        ReactRouter: true
    },
    plugins: [
        // 解决生成的带hash文件的调用问题
        new HtmlWebpackPlugin({
            template: 'index.html', // 其实在module.exports中有一个context上下文的概念，所以可以索引到index.html
            filename: 'index.html',
            title: '好买财富' // index.html中可以取到这个标题
        }),
        new CopyWebpackPlugin([
            {
                from: './src/theme',
                to:'./src/theme'
            },{
                from: './src/lib',
                to:'./src/lib'
            },{
                from: './src/hbenv.js',
                to:'./src/hbenv.js'
            }
        ])
    ]
}
