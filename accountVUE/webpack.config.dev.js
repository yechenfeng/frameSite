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
    publicPath: '/dist/',
    chunkFilename: '[name].js'
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css', '.ejs']
  },
  devtool: 'eval-source-map', // 浏览器的tab（Sources）生成webpack://，便于开发调试
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
      loaders: [
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader',
              exclude: /node_modules/
          },{
              test: /\.(png|jpg|gif)$/,
              loader: 'file-loader',
          },{
              test: /\.jsx?$/,
              loaders: ['babel-loader'],
              include: path.join(__dirname, 'src')
          },{
              test: require.resolve('zepto'),
              loader: 'exports-loader?window.Zepto!script-loader'
          }
      ]
  }
};
