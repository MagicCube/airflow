const Aria2 = require('aria2');
const config = require('config').get('aria2');
const log = require('../log');

let aria2 = null;

module.exports = {
  async setup() {
    aria2 = new Aria2(config);
  },

  async start() {
    log.info('Starting download service...');
    log.info(`Connecting to ${config.host}:${config.port}${config.path} ...`);
    await aria2.open();
    const version = await aria2.getVersion();
    log.info('Connected.');
    log.info(`Version of remote Aria2 server: ${version.version}`);
    log.info('Download service is now running.');

    await syncTasks();
  }

  async syncTasks() {

  }
};
