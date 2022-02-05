const fs = require('fs');
const { createPromptModule } = require('inquirer');

// Takes the string created in generateHTML and writes it to an html file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
      //if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, reolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File Created!',
      });
    });
  });
};

// Copies the style.css file into the same directory (dist) that the generated HTML page is written to.
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!',
      });
    });
  });
};

module.exports = { writeFile, copyFile };
