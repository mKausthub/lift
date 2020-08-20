/*
 * @file demo.conf.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 09.09.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const webpack = require('webpack');
const config = require('./base.conf');
const path = require('path');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  entry: './dev/App.jsx',
  output: {
    path: path.join(__dirname,'./demo'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /\.less$/,
        use: [ { loader: "style-loader" }, { loader: "css-loader", }, {loader: "less-loader"}]
      },
      {
        test: /\.(s*)css$/,
        loader: 'style-loader'
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});
