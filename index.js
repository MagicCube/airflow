const log = require('./lib/log');
const services = require('./lib/services');

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';

async function setup() {
  log.info(`Airflow is now starting in ${PRODUCTION_MODE ? 'PRODUCTION' : 'DEVELOPMENT'} mode...`);

  await services.setup();
  await services.start();
}

setup();
