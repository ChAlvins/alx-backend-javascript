interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Mark',
  lastName: 'Chao',
  age: 27,
  location: 'Nairobi'
}

const student2: Student = {
 firstName: 'Flavy'
 lastName: 'Kasi'
 age: 25,
 location: 'Mombasa'
}

//studenlist array
const studentsList: Student[] = [student1, student2];

//rendering a table and appending row for each student in the array
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentlist.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.text = student.firstName;
  locationCell.text = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
