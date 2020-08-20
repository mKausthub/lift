/**
 * dev.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

const config = require('./webpack/base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/App.jsx',
  output: 'bundle.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'dev',
    historyApiFallback: true,
    port: 5000
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
});
