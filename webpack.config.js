const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new HtmlWebpackPlugin({filename: 'page2.html', template: './src/page2.html'}),
        new HtmlWebpackPlugin({filename: '404.html', template: './src/404.html'}),
        new webpack.ProvidePlugin({
          "React": "react",
        }),
        new CopyWebpackPlugin({patterns: [
          {
            from: './src/favicon',
            to : './favicon'
          }]}),
      ]
}