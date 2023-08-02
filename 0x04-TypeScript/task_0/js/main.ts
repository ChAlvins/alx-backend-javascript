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

table.style.background = "lightgray";
table.appendChild(tbody);

studentlist.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  firstNameCell.style.border = "2px solid white";
  locationCell.style.border = "2px solid white";
  firstNameCell.style.padding = "4px";
  locationCell.style.padding = "4px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

document.body.appendChild(table);
