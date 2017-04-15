var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './client/src/app.js'
  },
  output: {
    filename: './client/dist/build/bundle.js',
    sourceMapFilename: './client/dist/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
