const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (PRODUCTION_MODE) {
  app.use(express.static('public'));
} else {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, webpackConfig.devServer));
}

module.exports = app;
