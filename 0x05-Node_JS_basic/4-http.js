// 4-http.js

const http = require('http');

// Create HTTP server
const app = http.createServer((req, res) => {
  // Set content type to plain text
  res.setHeader('Content-Type', 'text/plain');
  
  // Write response
  res.write('Hello Holberton School!');
  
  // End response
  res.end();
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
