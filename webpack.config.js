const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    icg : [
      'react-hot-loader/patch',                           // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',  // bundle the client for webpack-dev-server
                                                          // and connect to the provided endpoint

      'webpack/hot/only-dev-server',                      // bundle the client for hot reloading
                                                          // only- means to only hot reload for successful updates

      './index.js',                                       // the entry point of our app
    ]
  },

  output: {
    filename: '[name].js',                    // the output bundle
    path: resolve(__dirname, 'dist'),
    publicPath: '/'                           // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,                                // enable HMR on the server
    contentBase: resolve(__dirname, 'dist'),  // match the output path
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
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }, {
        test: /\.scss$/,
        loaders: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        })
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url'
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    extractCSS
  ],

  resolve: {
    modules: [ "node_modules" ]
  }
};
