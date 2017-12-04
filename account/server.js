/**
 * 服务器启动
 * Created by chenfeng on 2017/11/28.
 */
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.dev.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(666, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('正在监听开发环境端口：' + '666');
});
