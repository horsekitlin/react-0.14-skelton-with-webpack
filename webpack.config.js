var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var nodeModulePath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');

var source = {
    pageA : path.resolve(__dirname, "app", "pageA.js"),
    pageB : path.resolve(__dirname, "app", "pageB.js")
};

var config = {
  devtool: 'eval',
  app : ['webpack-dev-server/client?http://localhost:8080']
};

config.entry= source;

config.output= {
    path: path.join(__dirname, "build"),
    filename: 'js/[name].js',
};

config.module = {};
config.module.loaders= [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    exclude: [nodeModulePath]
  },
  {
    test: /\.css$/,
    loader: 'style!css'
  },
  {
    test: /\.scss$/,
    loader: 'style!css!sass'
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
  }
        ];

config.plugins= [
    new HtmlWebpackPlugin({
        title : "pageA",
        javascript : "js/pageA.js",
        template : 'index.html',
        filename : 'pageA.html',
    }),
    new HtmlWebpackPlugin({
        title : 'pageB',
        javascript : "js/pageB.js",
        template : 'index.html',
        filename : 'pageB.html',
    }),
    new webpack.ProvidePlugin({
        $ : 'jquery',
        jquery : 'jquery',
        _ : 'lodash',
        React: 'react',
        ReactDOM : 'react-dom'
  })
];

module.exports = config;
