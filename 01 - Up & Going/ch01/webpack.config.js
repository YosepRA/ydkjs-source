const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};
