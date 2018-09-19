const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  /* devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    port: 9000,
    stats: {
      colors: true,
    }
  }, */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ]
      }
    ]
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map'
}