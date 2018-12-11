import express from 'express';
import http from 'http';
import config from './config';
import log from './logger';
import routes from './routes';

const app = express();

routes(app);

const server = http.createServer(app);
server.listen(config.port);
server.on('error', error => log.error(error));
server.on('listening', () => log.info(`Listening at ${config.url}`));

process.on('uncaughtException', (error) => {
  log.error(error);
});

