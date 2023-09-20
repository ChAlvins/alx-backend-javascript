const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(fileName) {
  const students = {};
  const fields = {};

  try {
    const data = await readFile(fileName, 'utf-8');
    const lines = data.trim().split('\n');

    for (const line of lines) {
      if (line) {
        const [firstName, , , field] = line.split(',').map(item => item.trim());

        if (firstName && field) {
          students[field] = students[field] || [];
          students[field].push(firstName);

          fields[field] = (fields[field] || 0) + 1;
        }
      }
    }

    const totalStudents = lines.length - 1;
    const output = [`Number of students: ${totalStudents}`];

    for (const field in students) {
      if (students.hasOwnProperty(field)) {
        const numStudents = fields[field];
        const studentList = students[field].join(', ');
        output.push(`Number of students in ${field}: ${numStudents}. List: ${studentList}`);
      }
    }

    return output.join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');

    try {
      const output = await countStudents(process.argv[2]);
      response.end(output);
    } catch (error) {
      response.statusCode = 404;
      response.end('Cannot load the database');
    }
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

module.exports = app;
