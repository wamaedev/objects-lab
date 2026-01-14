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