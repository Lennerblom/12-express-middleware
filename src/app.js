'use strict';

import express from 'express';
let app = express();
//export default app;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

import router from './api/api.js';

app.use(router);
// Flag to know if we are up and going

let isRunning = false;
let server;
function start(port) {
  if (!isRunning) {
    server = app.listen(port, (err) => {
      if (err) {
        throw err;
      }
      // Tick the running flag
      isRunning = true;
      console.log('Server is up on port', port);
    });
  }
  else {
    console.log('Server is already running');
  }
}
function stop() {
  server.close(() => {
    isRunning = false;
    console.log('Server has been stopped');
  });
}
export {start, stop};