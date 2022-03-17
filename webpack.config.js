const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'MyLibrary',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
  },
};

