const request = require('supertest');
const { expect } = require('chai');
const server = require('./api');

describe('POST /login', () => {
  it('should return Welcome message with the provided username', async () => {
    const res = await request(server)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Accept', 'application/json');

    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Welcome Betty');
  });
});

describe('GET /available_payments', () => {
  it('should return an object with payment methods', async () => {
    const res = await request(server).get('/available_payments');

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});
