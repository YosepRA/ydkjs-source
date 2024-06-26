/* global require, module, __dirname */

const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/public/js'),
    publicPath: '/public/js/',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                  useBuiltIns: 'usage',
                  corejs: '3.37',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    port: 8000,
  },
  devtool: 'eval-source-map',
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, '../utils'),
    },
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
