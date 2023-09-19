const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n').slice(1);

    const students = {};

    lines.forEach(line => {
      const [firstName, , , field] = line.split(',').map(item => item.trim());
      
      if (firstName && field) {
        students[field] = students[field] || [];
        students[field].push(firstName);
      }
    });
    
    const totalStudents = lines.length;
    
    console.log(`Number of students: ${totalStudents}`);
    
    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        const numStudents = students[field].length;
        const studentList = students[field].join(', ');
        console.log(`Number of students in ${field}: ${numStudents}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
