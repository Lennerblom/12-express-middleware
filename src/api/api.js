'use strict';
const debug = require('debug')('api');

import express from 'express';
const router = express.Router();
import Chores from '../models/chores.js';

import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};


router.get('/api/v1/:model', (req, res, next) => {
  debug('get all');
  req.model.fetchAll()
    .then( data => sendJSON(res,data) )
    .catch(next);
});

router.get('/api/v1/chores/:id', (req, res, next) => {
  req.model.findOne(req.params.id)
    .then( data => sendJSON(res,data) )
    .catch(next);

});

router.post('/api/v1/:model', (req,res, next) => {
  let chore = new req.model(res.body);
  chore.save()
    .then( data => sendJSON(res,data) )
    .catch(next);
});
// router.put('/api/v1/:model', (req,res, next) => {
//   let chore = new req.model(res.body);
//   chore.save()
//     .then( data => sendJSON(res,data) )
//     .catch(next);
// });
export default router;