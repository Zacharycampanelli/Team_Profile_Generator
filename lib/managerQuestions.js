const managerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: 'Enter the name of the Team Manager:',
    validate: (managerNameInput) => {
      if (managerNameInput) {
        return true;
      } else {
        console.log('Please enter the name of the Team Manager');
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'managerId',
    message: 'Enter the id number of the manager:',
    validate: (managerIdInput) => {
      if (managerIdInput) {
        return true;
      } else {
        console.log('Please enter the id number of the manager');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'Enter the email address of the manager:',
    validate: (managerEmailInput) => {
      if (managerEmailInput) {
        return true;
      } else {
        console.log('Please enter the email address of the manager');
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'managerOffice',
    message: 'Enter the office number of the manager:',
    validate: (managerOfficeInput) => {
      if (managerOfficeInput) {
        return true;
      } else {
        console.log('Please enter the office number of the manager');
        return false;
      }
    },
  },
  // {
  //     type: 'list',
  //     name: 'toDoNext',
  //     message: 'What would you like to do next?',
  //     choices: ['Add an engineer', 'Add an intern', 'Finish']
  // },
  // {
  //     type: 'input',
  //     name: 'engineerGithub'
  //     message: enter
  // }
];

module.exports = managerQuestions;