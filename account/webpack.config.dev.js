/**
 * webpack开发模式
 * Created by chenfeng on 2017/11/28.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:666',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval-source-map', // 浏览器的tab（Sources）生成webpack://，便于开发调试
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
  }
};
