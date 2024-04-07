const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('POST /login endpoint', () => {
  it('should return "Welcome :username"', (done) => {
    request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Welcome Betty');
        done();
      });
  });
});

describe('GET /available_payments endpoint', () => {
  it('should return an object with credit_cards true and paypal false', (done) => {
    request(app)
      .get('/available_payments')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
  });
});
