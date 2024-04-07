const { expect } = require('chai');
const request = require('request');

describe('GET /available_payments', () => {
  it('returns the correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('POST /login', () => {
  it('returns the correct welcome message', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: 'Betty' })
    };
    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
