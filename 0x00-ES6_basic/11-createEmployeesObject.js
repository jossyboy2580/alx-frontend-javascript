export default function createEmployeesObject(departmentName, employees) {
  const newObject = {};

  newObject[`${departmentName}`] = [];
  
  for (const employee of employees) {
    newObject[`${departmentName}`].push(employee);
  }

  return newObject;
}
