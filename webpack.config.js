/* global __dirname, require, module */

/* eslint-disable no-alert, no-mixed-requires, prefer-destructuring */
const env = require('yargs').argv.env,
  libraryName = 'Library',
  path = require('path'),
  plugins = [],
  webpack = require('webpack'),
  /* eslint-disable no-alert, sort-vars, prefer-destructuring */
  UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

/* eslint-disable no-console */
console.info(env);

let outputFile = `${libraryName}.min.js`;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

module.exports = {
  devtool: 'source-map',
  entry:   `${__dirname}/src/index.js`,
  module:  {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        loader:  'babel-loader',
        test:    /(\.jsx|\.js)$/,
      },
      {
        exclude: /node_modules/,
        loader:  'eslint-loader',
        test:    /(\.jsx|\.js)$/,
      },
    ],
  },
  output: {
    filename:       outputFile,
    library:        libraryName,
    libraryTarget:  'umd',
    path:           `${__dirname}/lib`,
    umdNamedDefine: true,
  },
  plugins,
  resolve: {
    extensions: ['.json', '.js'],
    modules:    [path.resolve('./node_modules'), path.resolve('./src')],
  },
};

