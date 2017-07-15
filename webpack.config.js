const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env;

let libaryName = 'libary';

let plugins = [], outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libaryName + '.min.js';
} else {
  outputFile = libaryName + '.js';
}

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    libary: libaryName,
    libaryTarget: 'UMD',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      // uglify js
      new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          output: { comments: false },
          sourceMap: true
      }),
      // env plugin
      new webpack.DefinePlugin({
          'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
      })
  ]
}
