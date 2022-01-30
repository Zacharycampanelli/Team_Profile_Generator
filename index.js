const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const managerQuestions = require('./lib/managerQuestions');
const engineerQuestions = require('./lib/engineerQuestions');
const internQuestions = require('./lib/internQuestions');

const employees = [];

const typeOfEmployee = {
  type: 'list',
  name: 'employeeRole',
  message: 'What type of employee to add:',
  choices: ['Engineer', 'Intern'],
};

const employeeLoop = {
  type: 'list',
  name: 'choice',
  message: 'Choose what you would like to do next:',
  choices: ['Add an employee', 'Finish'],
};

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then((engineerData) => {
        let engineer = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.engineerGithub);
        employees.push(engineer)
        inputNextChoice();
    })
}

function promptIntern() {
    inquirer.prompt(internQuestions).then((internData) => {
        let intern = new Intern(internData.internName, internData.internId, internData.internEmail, internData.internSchool);
        employees.push(intern)
        console.log(employees)
    })
}


function addEmployee() {
  inquirer.prompt(typeOfEmployee).then((currentEmployee) => {
    if (currentEmployee.employeeRole == 'Engineer') {
        promptEngineer();
    } else if (currentEmployee.employeeRole == 'Intern') {
        promptIntern();
    } 
  });
}

function inputNextChoice() {
  inquirer
    .prompt(employeeLoop)
    .then((answer) => {
      if (answer.choice === 'Add an employee') {
        addEmployee();
      } else if (answer.choice === 'Finish') {
        console.log('done');
      }
    })
    .then((update) => {
      console.log(employees);
    });
}

function promptUser(questions) {
  inquirer.prompt(questions);
}

function promptManager() {
  inquirer.prompt(managerQuestions).then((managerData) => {
    let manager = new Manager(
      managerData.managerName,
      managerData.managerId,
      managerData.managerEmail,
      managerData.managerOffice
    );
    employees.push(manager);
    inputNextChoice();
  });
}

function init() {
  promptManager();
}

let temp;
init();
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
