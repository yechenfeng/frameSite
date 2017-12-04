/**
 * webpack生产模式
 * Created by chenfeng on 2017/11/28.
 */

const webpack = require('webpack');
const commonConfig = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
commonConfig.output.publicPath = '';
commonConfig.module.loaders.unshift(
    { test: /\.js(x)?$/, loader: 'babel', exclude: /node_modules/ }
);
commonConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        mangle: true
    })
);
module.exports = commonConfig;
