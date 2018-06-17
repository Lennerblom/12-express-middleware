'use strict';

import superagent from 'superagent';
import app from '../../../src/app.js';
//import {start, stop} from '../../../src/app.js';

describe('app module', () => {

  beforeAll( () => {
    app.start(3009);
  });

  afterAll( () => {
    app.stop();
  });


  it('should return 200 for homepage', (done) => {
    superagent.get('http://localhost:3009/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        console.log(response.status);
        expect(response.text).toEqual(expect.stringContaining('Hello'))
          .catch(console.error);
      
      });
    done();
  });
});

//xit('GET: test 400, it should respond with "bad request" if no id was provided in the request', () => {
// return superagent.get('http://localhost:3009/api/v1?id=')
// .then(response => {
// expect(response.statusCode).toBe(404);
// });
// });
  
// xit('GET: test 404, it should respond with "not found" for valid requests made with an id that was not found', () => {
// return superagent.get('http://localhost:3009/api/v1?id=12345')
// .then(response => {
// expect(response.statusCode).toBe(400);
// });
// });
  
// xit('GET: test 200, it should contain a response body for a request made with a valid id', () => {
// return superagent.get('http://localhost:3009/api/v1/(req.params.id)')
// .then(response => {
// expect(response.statusCode).toBe(200);
// expect(response.text).toEqual(expect.string('Hello'));
// });
 