'use strict';
const debug = require('debug')('api');
import morgan from 'morgan';
import cors from 'cors';
import express from 'express';

import errorHandler from './middleware/errors.js';
import notFound from './middleware/404.js';

let app = express();

let corsOptions = {
  origin: 'http://index',
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

import router from './api/api.js';

app.use(router);

app.use(notFound);

app.use(errorHandler);


let isRunning = false;
let server = null;
function start(port) {
  if (!isRunning) {
    server = app.listen(port, (err) => {
      if (err) {
        throw err;
      }
      isRunning = true;
      debug('Server is up on port', port);
    });
  }
  else {
    debug('Server is already running');
  }
}
function stop() {
  server && server.close(() => {
    isRunning = false;
    console.log('Server has been stopped');
  });
}
export {start, stop};