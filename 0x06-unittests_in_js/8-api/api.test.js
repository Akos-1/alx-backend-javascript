const request = require('request');
const expect = require('chai').expect;
const server = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Index page', () => {
  before(() => {
    server;
  });

  after(() => {
    server.close();
  });

  it('should return correct status code', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
