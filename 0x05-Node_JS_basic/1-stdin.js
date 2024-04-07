// src/1-stdin.js

const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', answer => {
  console.log(`Your name is: ${answer}`);
  console.log('This important software is now closing');
  rl.close();
});
