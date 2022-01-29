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





function inputNextChoice () {
    return inquirer.prompt([
        // {

        // },
        {
            type: 'list',
            name: 'choice',
            message: 'Choose what you would like to do next:',
            choices: ['Add an engineer', 'Add an intern', 'Finish'], 
        }
    ])
    .then((answer) => {
        if (answer.choice ==='Add an engineer'){
            promptUser(engineerQuestions);   
        } else if (answer.choice ==='Add an intern'){
            promptUser(internQuestions);
        }

    })

}

function promptUser(questions){
    return inquirer.prompt(questions);
}

function init() {
    return promptUser(managerQuestions);
    
}

init()
.then((managerData) => {
      employees.push(managerData);
      inputNextChoice();
    })