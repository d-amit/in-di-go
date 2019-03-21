const { resolve } = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

const defaultPlugins = [
  new webpack.HotModuleReplacementPlugin({
    multiStep: true
  }), // enable HMR globally
  new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  new HtmlWebpackPlugin({
    template: 'index.html',
    favicon: 'favicon.ico'
  }),

  extractCSS
];

const devPlugins = [];
const prodPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin()
];

console.info('ENV: ' + process.env.NODE_ENV);

const icgEntry = process.env.NODE_ENV === 'production' ? [
  './index.js'
] : [
  'react-hot-loader/patch',                           // activate HMR for React

  'webpack-dev-server/client?http://localhost:8080',  // bundle the client for webpack-dev-server
                                                      // and connect to the provided endpoint

  'webpack/hot/only-dev-server',                      // bundle the client for hot reloading
                                                      // only- means to only hot reload for successful updates

  './index.js'                                        // the entry point of our app
];



module.exports = {
  entry: {
    icg : icgEntry
  },

  output: {
    filename: '[name].js',                    // the output bundle
    path: resolve(__dirname, 'docs'),
    publicPath: '/'                           // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map' ,
  devServer: {
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'docs'),  // match the output path
    hot: true,                                // enable HMR on the server
    publicPath: '/'                           // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: [ 'babel-loader' ],
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: extractCSS.extract({
          use: [
          {
              loader: 'css-loader',
              options: {
                 sourceMap: true
              }
          }
          ]
        })
      },
      {
        test: /\.scss$/,
        loaders: extractCSS.extract({
          use: [
          {
              loader: 'css-loader',
              options: {
                 sourceMap: true
              }
          }, {
            loader: 'sass-loader'
          }
          ]
        })
      }, {
        test: /\.(jpg|jpeg|gif|png|ico|svg)$/,
        loader: [ 'file-loader?minimize&optimizationLevel=5&progressive=true' ]
      }
    ],
  },

  plugins: process.env.NODE_ENV === 'production' ?
    defaultPlugins.concat(prodPlugins) : defaultPlugins,

  resolve: {
    modules: [ "node_modules" ]
  }
};
