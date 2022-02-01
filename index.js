const inquirer = require('inquirer');
//const { writeFile, copyFile } = require('./utils/write-file;')
const generateHTML = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQuestions = require('./lib/managerQuestions');
const employeeQuestions = require('./lib/employeeQuestions');

const employees = [];

// const typeOfEmployee = {
//   type: 'list',
//   name: 'employeeRole',
//   message: 'What type of employee to add:',
//   choices: ['Engineer', 'Intern'],
// };

// const employeeLoop = {
//   type: 'list',
//   name: 'choice',
//   message: 'Choose what you would like to do next:',
//   choices: ['Add an employee', 'Finish'],
// };

async function createWebpage() {
  const htmlData = await generateHTML(employees);
  console.log(htmlData);

  // for (let i = 0; i < employees.length; i++) {
  //   console.log( `${i} ` + employees[i] + employees);
  // }
  // generateHTML(employees);
}

function addEmployee() {
  return inquirer.prompt(employeeQuestions).then((currentEmployee) => {
    if (currentEmployee.currentRole == 'Engineer') {
      let { name, id, email, github, prompt } = currentEmployee;
      let engineer = new Engineer(name, id, email, github);
      employees.push(engineer)
      console.log(engineer, employees);
    } else if (currentEmployee.currentRole == 'Intern') {
      let { name, id, email, school, prompt } = currentEmployee;
      let intern = new Intern(name, id, email, school);
      employees.push(intern);
      console.log(intern, employees);
    }

    if (currentEmployee.confirmAdd) {
      return addEmployee();
    } else {
      console.log(employees);
      return employees;
    }
  });
}

// async function inputNextChoice() {
//    await inquirer
//     .prompt(employeeLoop)
//     .then((answer) => {
//       if (answer.choice === 'Add an employee') {
//         addEmployee();
//       } else if (answer.choice === 'Finish') {
//         console.log("generating webpage...")
//       }
//     })
//     .then((employees) => {
//       createWebpage(employees);
//     });
// }

function addManager() {
  return inquirer.prompt(managerQuestions).then((managerData) => {
    let { name, id, email, office } = managerData;
    let manager = new Manager(name, id, email, office);

    employees.push(manager);
    console.log(manager, employees);
  });
}

addManager().then(addEmployee)
.then(employees => {
  return generateHTML(employees);
})
//   .then((managerData) => {
//     console.log(managerData.managerName);
//     let { managerName, managerId, managerEmail, managerOffice } = managerData;
//     let temp = new Manager(managerName, managerId, managerEmail, managerOffice);
//     console.log(temp.getRole());
//     return temp;
//   })
//   .then((data) => {
//     console.log(data.getRole());
//     employees.push(inputNextChoice());
//     //console.log(employees)
//   });
