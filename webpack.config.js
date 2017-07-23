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
    path: path.join(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename: './[name].js'
  },
  devServer: {
    contentBase: path.resolve('./public/assets'),
    publicPath: '/assets/'
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
        test: /\.(jpg|png)$/,
        loader: 'url-loader?name=images/[name].[ext]&limit=10240'
      },
      {
        test: /\.(eot|svg|ttf|woff2?)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),
    new ExtractTextPlugin('./[name].css')
  ]
};
