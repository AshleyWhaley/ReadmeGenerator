
const inquirer = require ('inquirer');
const fs = require ('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the user information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What is the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What is the license for the project?',
        name: 'license',
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'Other', 'None']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
