const http = require('http');

const app = require('../server/app');
const log = require('../log');

const port = process.env.PORT ? parseInt(process.env.PORT, 0) : 3000;
let httpServer = null;

module.exports = {
  async setup() {
    httpServer = http.createServer(app);
  },

  async start() {
    log.info(`HTTP server is now starting at ${port}...`);
    httpServer.listen(port, () => {
      log.info(`HTTP server is now listening at ${port}...`);
    });
  }
};
