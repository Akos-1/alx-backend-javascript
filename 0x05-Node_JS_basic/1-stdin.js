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

// Main function
async function main() {
  console.log('Welcome to Holberton School, what is your name?\n');

  const name = await getInput('');
  console.log(`Your name is: ${name}\n`);

  console.log('This important software is now closing\n');
}

// Execute the main function
main();
