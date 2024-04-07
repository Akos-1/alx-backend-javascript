// src/2-read_file.js

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data into lines
    const lines = data.trim().split('\n');

    // Initialize counts for each field
    const counts = {};

    // Loop through each line
    lines.forEach(line => {
      // Split line into fields
      const fields = line.split(',');

      // Extract first name and field
      const firstName = fields[0];
      const field = fields[fields.length - 1];

      // Ignore empty lines
      if (firstName.trim() !== '') {
        // Increment count for field
        counts[field] = counts[field] ? counts[field] + 1 : 1;
      }
    });

    // Log number of students in each field
    console.log('Number of students:');
    for (const [field, count] of Object.entries(counts)) {
      console.log(`Number of students in ${field}: ${count}. List: ${getFirstNames(lines, field)}`);
    }
  } catch (error) {
    // Handle file read error
    console.error('Cannot load the database');
  }
}

// Helper function to get first names for a specific field
function getFirstNames(lines, field) {
  const firstNames = [];
  lines.forEach(line => {
    const fields = line.split(',');
    const firstName = fields[0];
    const currentField = fields[fields.length - 1];
    if (currentField === field && firstName.trim() !== '') {
      firstNames.push(firstName);
    }
  });
  return firstNames.join(', ');
}

// Call countStudents function with the path to the database file
countStudents('database.csv');
