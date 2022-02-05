const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/write-file');
const generateHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQuestions = require('./lib/managerQuestions');
const employeeQuestions = require('./lib/employeeQuestions');

const employees = [];

// Adds either an Engineer or Intern Object depending on user input
function addEmployee() {
  return inquirer.prompt(employeeQuestions).then((currentEmployee) => {
    if (currentEmployee.currentRole == 'Engineer') {
      let { name, id, email, github, prompt } = currentEmployee;
      let engineer = new Engineer(name, id, email, github);
      employees.push(engineer);
    } else if (currentEmployee.currentRole == 'Intern') {
      let { name, id, email, school, prompt } = currentEmployee;
      let intern = new Intern(name, id, email, school);
      employees.push(intern);
    }

    // Either the function is called recursively to add another employee...
    if (currentEmployee.confirmAdd) {
      return addEmployee();
      // Or else the user is done and the list of employees is returned
    } else {
      return employees;
    }
  });
}

// Function to add a Manager object, only runs once
function addManager() {
  return inquirer.prompt(managerQuestions).then((managerData) => {
    let { name, id, email, office } = managerData;
    let manager = new Manager(name, id, email, office);

    employees.push(manager);
  });
}

// Application begins here
addManager()
  .then(addEmployee)
  .then((employees) => {
    return generateHTML(employees);
  })
  .then((writeToFile) => {
    return writeFile(writeToFile);
  })
  .then((writeResponse) => {
    return copyFile();
  })
  .then((fileToConsole) => {
    console.log(fileToConsole);
  });
