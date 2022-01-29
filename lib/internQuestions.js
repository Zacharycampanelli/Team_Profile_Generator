const internQuestions = [
  {
    type: 'input',
    name: 'internName',
    message: 'Enter the name of the Intern:',
    validate: (internNameInput) => {
      if (internNameInput) {
        return true;
      } else {
        console.log('Please enter the name of the intern');
        return false;
      }
    },
  },
  {
    type: 'number',
    name: 'internId',
    message: 'Enter the id number of the intern:',
    validate: (internIdInput) => {
      if (internIdInput) {
        return true;
      } else {
        console.log('Please enter the id number of the intern');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'internEmail',
    message: 'Enter the email address of the intern:',
    validate: (internEmailInput) => {
      if (internEmailInput) {
        return true;
      } else {
        console.log('Please enter the email address of the intern');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'internSchool',
    message: 'Enter the school of the intern:',
    validate: (internSchoolInput) => {
      if (internSchoolInput) {
        return true;
      } else {
        console.log('Please enter the school of the intern');
        return false;
      }
    },
  },
];

module.exports = internQuestions;
