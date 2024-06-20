/* global require, module, __dirname */

const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/main.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/public/js'),
    publicPath: '/public/js/',
  },
  mode: 'development',
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    port: 8000,
  },
  devtool: 'eval-source-map',
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
