const http = require('http');

const app = require('../app');
const log = require('../log');

const httpServer = http.createServer(app);
const port = process.env.PORT ? parseInt(process.env.PORT, 0) : 3000;
httpServer.listen(port, () => {
  log.info(`Airflow HTTP server is now listening at ${port}...`);
});
