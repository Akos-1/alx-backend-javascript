// src/1-stdin.js

// Function to handle input from the user
function getInput(prompt) {
  return new Promise(resolve => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(prompt, userInput => {
      resolve(userInput);
      rl.close();
    });
  });
}
