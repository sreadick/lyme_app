var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'client/src/app.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
    ]
  }
};

// module: {
//   loaders: [
//     {
//       test: /\.jsx?$/,
//       exclude: /(node_modules)/,
//       loader: 'babel-loader',
//       query: {
//         presets: ['react', 'es2015']
//       }
//     }
//   ]
// }
