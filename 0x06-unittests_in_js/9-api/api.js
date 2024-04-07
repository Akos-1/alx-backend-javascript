const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

const server = app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = server;
