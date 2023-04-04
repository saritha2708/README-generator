// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((response) =>
    response.confirm === response.password
      ? writeToFile('test.md', markdown(response))
      : console.log(response)
  );
}

// Function call to initialize app
init();



