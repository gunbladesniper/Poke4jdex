var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: './react_client/react/index.js',
  output: {
    path: path.join(__dirname, 'react_client/dist'),
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}