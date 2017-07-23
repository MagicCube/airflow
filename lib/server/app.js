const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (PRODUCTION_MODE) {
  app.use('/assets', express.static('public/assets'));
} else {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, webpackConfig.devServer));
}

const indexHtmlHandler = (req, res, next) => {
  if (req.path.indexOf('.') === -1) {
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  } else {
    next();
  }
};
app.get('/', indexHtmlHandler);
['cloud-downloader', 'discovery', 'media-library'].forEach((id) => {
  app.get(`/${id}/*`, indexHtmlHandler);
  app.get(`/${id}`, (req, res) => {
    res.redirect(`/${id}/`);
  });
});

app.use('/api', require('../api'));

module.exports = app;
