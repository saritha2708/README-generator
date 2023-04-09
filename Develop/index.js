// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
// An array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project? ',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a brief description of your project: ',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps to install your project? ',
    name: 'installation',
  },  
  {
    type: 'input',
    message: 'Provide usage instructions for your project: ',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Whom do you want to give credit? ',
    name: 'credits',
  },
  {  
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense'],
  },
  {
    type: 'input',
    message: 'Provide guidelines for contributing to your project: ',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Provide instructions for running tests for your project: ',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'githubUsername',
  },
  {
    type: 'input',
    message: 'What is your Email address? ',
    name: 'email',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) => {
        err ? console.error(err) : console.log('Success! Your README.md file has been generated.')
    });
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('README.md', markdown(response));
    });
}

// Function call to initialize app
init();


