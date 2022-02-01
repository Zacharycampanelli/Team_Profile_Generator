const employeeQuestions = [
  {
    type: 'list',
    name: 'currentRole',
    message: 'What type of employee to add:',
    choices: ['Engineer', 'Intern'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the employee:',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter the name of the employee');
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'id',
    message: 'Enter the id number of the employee:',
    validate: (engineerIdInput) => {
      if (engineerIdInput) {
        return true;
      } else {
        console.log('Please enter the id number of the engineer');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the email address of the engineer:',
    validate: (engineerEmailInput) => {
      if (engineerEmailInput) {
        return true;
      } else {
        console.log('Please enter the email address of the employee');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter the github username of the engineer:',
    when: (role) => role.currentRole === 'Engineer',
    validate: (engineerGithubInput) => {
      if (engineerGithubInput) {
        return true;
      } else {
        console.log('Please enter the github username of the employee');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter the school of the employee:',
    when: (role) => role.currentRole === 'Intern',
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log('Please enter the school of the employee');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    name: 'confirmAdd',
    message: 'Would you like to add another team member?',
    default: false,
  },
];

module.exports = employeeQuestions;
