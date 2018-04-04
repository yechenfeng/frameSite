/**
 * webpack基本配置
 * Created by chenfeng on 2017/11/28.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: { // 入口
        app: path.resolve(__dirname, './src/index.js'),
        vendor: [
          'react',
          'react-dom',
          'react-redux',
          'react-router',
          'react-router-redux',
          'redux',
          'zepto'
        ]
    },
    output: { // 输出
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js?v=[hash]', // 不要在这里指定绝对路径，path中会指定
        chunkFilename: 'assets/js/[name].js?v=[hash]'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.ejs']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },{
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.Zepto!script-loader'
            },{
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },{
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/img/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 解决生成的带hash文件的调用问题
            template: 'index.ejs', // 其实在module.exports中有一个context上下文的概念，所以可以索引到index.html
            filename: 'index.html',
            title: '好买财富', // index.html中可以取到这个标题
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            },
            hashData: new Date().getTime(),
            hash : false, // 内容改变时，才会进行重新hash赋值
            inject : true
        }),
        new CopyWebpackPlugin([ // 拷贝文件
            {
                from: './src/hbenv.js',
                to:'./assets/js/hbenv.js'
            }
        ]),
        new webpack.optimize.UglifyJsPlugin({ //清除打包后文件中的注释,和copyright信息
            output: {
              comments: false,
            },
            compress: {
              warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/js/vendor.js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('bundle.css?v=[hash]')
    ]
}
