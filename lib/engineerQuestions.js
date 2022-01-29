const engineerQuestions = [
  {
    type: 'input',
    name: 'engineerName',
    message: 'Enter the name of the Engineer:',
    validate: (engineerNameInput) => {
      if (engineerNameInput) {
        return true;
      } else {
        console.log('Please enter the name of the engineer');
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'engineerId',
    message: 'Enter the id number of the engineer:',
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
    name: 'engineerEmail',
    message: 'Enter the email address of the engineer:',
    validate: (engineerEmailInput) => {
      if (engineerEmailInput) {
        return true;
      } else {
        console.log('Please enter the email address of the engineer');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'engineerGithub',
    message: 'Enter the github username of the engineer:',
    validate: (engineerGithubInput) => {
      if (engineerGithubInput) {
        return true;
      } else {
        console.log('Please enter the github username of the engineer');
        return false;
      }
    },
  },
];

module.exports = engineerQuestions;
