// 3-read_file_async.js

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const counts = {};

        lines.forEach(line => {
          const fields = line.split(',');
          const firstName = fields[0].trim();
          const field = fields[fields.length - 1].trim();

          if (firstName !== '') {
            counts[field] = counts[field] ? counts[field] + 1 : 1;
          }
        });

        console.log('Number of students:');
        for (const [field, count] of Object.entries(counts)) {
          console.log(`Number of students in ${field}: ${count}. List: ${getFirstNames(lines, field)}`);
        }

        resolve();
      }
    });
  });
}

function getFirstNames(lines, field) {
  const firstNames = [];
  lines.forEach(line => {
    const fields = line.split(',');
    const firstName = fields[0].trim();
    const currentField = fields[fields.length - 1].trim();
    if (currentField === field && firstName !== '') {
      firstNames.push(firstName);
    }
  });
  return firstNames.join(', ');
}

// Example usage:
countStudents('database.csv')
  .then(() => {
    console.log('File read successfully.');
  })
  .catch(error => {
    console.error(error.message);
  });

module.exports = countStudents;
