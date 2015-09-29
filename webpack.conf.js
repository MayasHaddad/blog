/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    path: './public/js/dist/',
    filename: 'index.js'
  },

  debug: false,
  devtool: false,
  entry: [
    './public/js/src/main.js'
    ],

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({"minify": true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/public/styles',
      'mixins': __dirname + '/public/mixins',
      'components': __dirname + '/public/js/components/',
      'stores': __dirname + '/public/js/stores/',
      'actions': __dirname + '/public/js/actions/'
    }
  },
    
  module: {

    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules|bower_components/,
      loader: 'jsxhint-loader'
    }],
      
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, { 
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
    },
    {
      test: /\.html/, 
      loader: 'file?name=[name].[ext]' 
    }]
  },

  jshint: {
      esnext: true//Options to jshint-loader https://github.com/webpack/jshint-loader
  }
};