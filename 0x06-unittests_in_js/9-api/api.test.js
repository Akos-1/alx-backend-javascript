const request = require('request');
const expect = require('chai').expect;
const server = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Cart page', () => {
  before(() => {
    server;
  });

  after(() => {
    server.close();
  });

  it('should return correct status code when :id is a number', (done) => {
    const cartId = 12;
    request.get(`${BASE_URL}/cart/${cartId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct status code when :id is NOT a number (=> 404)', (done) => {
    const invalidCartId = 'hello';
    request.get(`${BASE_URL}/cart/${invalidCartId}`, (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
