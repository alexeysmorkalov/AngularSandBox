const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
        new webpack.ProvidePlugin({
          "React": "react",
        }),
      ]
      /*plugins: [
        new webpack.ProvidePlugin({
          "React": "react",
        }),
      ],*/
}