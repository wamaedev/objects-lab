// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAdress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(object, key, value){
  let updatedEmployee = {
    ...object,
    [key]: value
  };
  return updatedEmployee;
}
// function updateEmployeeWithKeyAndValue(object, key, value){
//   return {
//     ...object,
//     [key]: value
//   };
// }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key){
  const deletedEmployee = {
    ...employee
  };
  delete deletedEmployee[key];
  return deletedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}