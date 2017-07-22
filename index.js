const log = require('./lib/log');

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

log.info(`Airflow is now starting in ${PRODUCTION_MODE ? 'PRODUCTION' : 'DEVELOPMENT'} mode...`);
// Start HTTP server
require('./lib/http/server');
