//Include packages for application
const inquirer = require ('inquirer');
const fs = require ('fs');

//Create an array of questions 
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

//Create a function to fill out README file
function writeToFile(response) {
   `
    # ${response.title}
    [![License](https://img.shields.io/badge/license-${response.license}-green)]

    ## Description 
    ${response.description}

    ## Table of Contents
    [Description](#Description)  
    [Installation](#Installation)  
    [Usage](#Usage)  
    [License](#License)  
    [Contributing](#Contributing)  
    [Tests](#Tests)  
    [Questions](#Questions)

    ## Installation
    ${response.install}

    ## Usage
    ${response.usage}

    ## License
    ${response.license}

    ##Contributing 
    ${response.contribution}

    ## Testing
    ${response.test}

    ## Questions
    For any questions, please contact me by email or Github page
    Email: ${response.email}
    Github Page: https://github.com/${response.username}
`;
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        try {
            const readme = generateREADME(response);
            fs.writeFileSync('README.md', readme);
            console.log('Success! You wrote a README.md file');
        } catch (error) {
            console.log(error);
        }
    });
};

//Callback to initialize application 
init();
