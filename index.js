'use strict';

require('dotenv').config();

require('babel-register');

// let flow = require('flow');

require('./src/app.js').start(process.env.PORT);