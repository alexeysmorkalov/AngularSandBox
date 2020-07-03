const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry : "./webapps/src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
             MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({template: './webapps/src/index.html'}),
      new CopyWebpackPlugin({patterns: [
        {
          from: './webapps/assets/favicon',
          to : './favicon'
        }]}),
      new CopyWebpackPlugin({patterns: [
        {
          from: './webapps/nojs',
          to : './nojs'
        }]}),
      new CopyWebpackPlugin({patterns: [
        {
          from: './webapps/404',
          to : './'
        }]}),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
      }),        
        ]
}