interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Joseph",
  lastName: "Ajobiewe",
  age: 30,
  location: "Ibadan",
};

const student2: Student = {
  firstName: "Merit",
  lastName: "Edafe",
  age: 30,
  location: "Warri",
};

const studentArray: Array<Student> = [student1, student2];

const table = document.createElement("table");

studentArray.forEach((student) => {
  const row = document.createElement("tr");
  const nameNode = document.createElement("td");
  const locationNode = document.createElement("td");

  nameNode.textContent = `${student.firstName}`;
  locationNode.textContent = `${student.location}`;

  row.appendChild(nameNode);
  row.appendChild(locationNode);

  table.appendChild(row);
});
