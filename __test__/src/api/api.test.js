'use strict';

import superagent from 'superagent';
import {start, stop} from '../../../src/app.js';
import Chores from '../../../src/models/chores.js';
import router from '../../../src/api/api.js';

describe('app module', () => {

  beforeAll( () => {
    start(1212);
  });

  afterAll( () => {
    stop();
  });

  it('should return 200 for homepage', (done) => {
    superagent.get('http://localhost:1212/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        console.log(response.status);
        expect(response.text).toEqual('Hello ');
        done();
      });
    
  });

  // xit('POST: test 400, it should respond with "bad request" if no request body was provided or the body was invalid', (done) => {
    
  //   let chore = new Chores();
  //   chore = {
  //     assignedTo: 'Abigail',
  //     choreName: 'dishes',
  //   };
  //   router.post('/api/v1/chores', (req,res) => {
  //     //chore = new Chores(req.body);
  //     chore.req.body;
  //     //chore.save();
  //     res.statusCode = 200;
  //     res.statusMessage = 'OK';
  //     res.setHeader('Content-Type', 'application/json');
  //     res.write(JSON.stringify(req.body));
  //     res.end();
  //     //.catch(console.error);
  //     return superagent.post('http://localhost:3012/api/v1?id=12345')
  //       .then(response => {
  //         expect(response.statusCode).toBe(400);
  //         done();
  //       });
  //   });
  // });
  
  // xit('POST: test 200, it should respond with the body content for a post request with a valid body', (post) => {
  
  // });


  // xit('GET: test 400, it should respond with "bad request" if no id was provided in the request', () => {
  //   return superagent.get('http://localhost:3012/api/v1?id=')
  //     .then(response => {
  //       expect(response.statusCode).toBe(404);
  //     });
  // });
  
  // xit('GET: test 404, it should respond with "not found" for valid requests made with an id that was not found', () => {
  //   return superagent.get('http://localhost:3012/api/v1?id=12345')
  //     .then(response => {
  //       expect(response.statusMessage).toBe('Not Found');
  //     });
  // });
  
  // xit('GET: test 200, it should contain a response body for a request made with a valid id', () => {
  //   return superagent.get('http://localhost:3012/api/v1/(req.params.id)')
  //     .then(response => {
  //       expect(response.statusCode).toBe(200);
  //       expect(response.text).toEqual('Hello');
  //     });
  //});
});