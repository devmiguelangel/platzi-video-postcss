const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    compress: true,
    port: 9000,
  }
}