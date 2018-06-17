'use strict';

import express from 'express';
const router = express.Router();
import Chores from '../models/chores.js';

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};
let serverError = (res, err) => {
  let error = {error:err};
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};
let notFoundError = (res, err) => {
  let error = {error:err};
  res.statusCode = 404;
  res.statusMessage = 'Not found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

let badReqError = (res, err) => {
  let error = {error:err};
  res.statusCode = 400;
  res.statusMessage = 'bad request';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.get('/', (req,res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.params.name || '';
  res.write(`Hello ${name}`);
  res.end();
});

router.get('/api/v1/chores', (req, res) => {
  Chores.fetchAll()
    .then( data => sendJSON(res,data) )
    .catch( err => serverError(res,err) );
});

router.get('/api/v1/chores/:id', (req, res) => {
  if ( req.params.id ) {
    Chores.findOne(req.params.id)
      .then( data => sendJSON(res,data) )
      .catch( err => notFoundError(res,err) );
  } else if(!req.params.id) {
    badReqError;
  }
  
});

router.post('/api/v1/chores', (req,res) => {
  let record = new Chores(req.body);
  record.save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/chores/:id', (req,res) => {
  if(req.params.id) {
    Chores.deleteOne(req.params.id)
      .then(success => {
        let data = {id:req.params.id, deleted: success};
        sendJSON(res,data);
      })
      .catch(console.error);
  }
});

export default router;