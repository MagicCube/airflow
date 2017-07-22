const winston = require('winston');

const logger = winston.loggers.add('default', {
  console: {
    level: 'debug',
    colorize: true
  }
});

module.exports = logger;
