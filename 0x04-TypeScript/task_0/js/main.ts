interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  { firstName: "John", lastName: "Doe", age: 20, location: "New York" },
  { firstName: "Jane", lastName: "Smith", age: 22, location: "Los Angeles" }
];

function renderTable(students: Student[]) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  headerRow.appendChild(header1);
  const header2 = document.createElement('th');
  header2.textContent = 'Location';
  headerRow.appendChild(header2);

  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
