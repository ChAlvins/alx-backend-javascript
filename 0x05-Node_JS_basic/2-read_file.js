const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    const students = {};
    const fields = {};

    for (const line of lines) {
      const [firstName, , , field] = line.split(',').map(item => item.trim());

      if (firstName && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);

        fields[field] = (fields[field] || 0) + 1;
      }
    }

    const totalStudents = lines.length - 1; // Subtract 1 for the header

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
