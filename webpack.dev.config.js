const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, './index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  devServer: {
    compress: true,
    port: 9000,
    stats: {
      colors: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map'
}