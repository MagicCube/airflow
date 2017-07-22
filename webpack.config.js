const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('./src'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    vendor: './vendor/index.js',
    index: ['./index.jsx']
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'assets/[name].js'
  },
  devServer: {
    contentBase: path.resolve('./public')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!less-loader' })
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          'html-loader?removeAttributeQuotes=false'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?name=assets/images/[name].[ext]&limit=10240'
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),
    new ExtractTextPlugin('./assets/[name].css')
  ]
};
