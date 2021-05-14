// Task: Download NPM packages this project requires

const fs = require('fs');
const inquirer = require('inquirer');
const writeFile = require('./utils/generateMarkdown');
const generateMarkdown = require('./src/template');


console.log(`
***********************************************************
*                    README Generator                     *
***********************************************************
 ___________________________________________________________
|                         WELCOME                           |
|       *Please follow the prompts to ensure                |
|       successful generation of your README file           |
|       *If instructions do not load automatically,         |
|       please press space to continue through prompts.     |
|___________________________________________________________|
`);

// Task: Construct questions for user input ( Outline for the README )

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter a name for your project. ( REQUIRED )',
            validate: nameInput => {
                if ( nameInput ) {
                    return true;
                } else {
                    console.log('What is the name of your project?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description for your project. ( REQUIRED )',
            validate: descriptionInput => {
                if ( descriptionInput ) {
                    return true;
                } else {
                    console.log('How would you like to describe your project?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
            validate: installationInput => {
                if ( installationInput ) {
                    return true;
                } else {
                    console.log('What are the instructions for installation for your?');
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide a description for how to use your project.',
            validate: usageInput =>{
                if (usageInput) {
                    return true;
                } else {
                    console.log('How would you like to describe what you can use your project for?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'repositoryLink',
            message: 'Please provide the URL for your GitHub application. ( REQUIRED )',
            validate: repositoryLink => {
                if (repositoryLink) {
                    return true;
                } else {
                    console.log(`What is your application's GitHub URL?`);
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username. ( REQUIRED )',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('What is your GitHub username?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address. ( REQUIRED )',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('What is your email address?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Please provide all resources used and personnel that helped with the completion of your project. ( REQUIRED )',
            validate: creditInput => {
                if (creditInput) {
                    return true;
                } else {
                    console.log('Who/What assisted you with completing your project?');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'Please check the box beside every coding language used in your project. ( Check all that apply )',
            choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'Bootstrap', 'JQuery', 'Node']
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please provide a screenshot of your completed application. ( REQUIRED )',
            validate: screenshotInput => {
                if (screenshotInput) {
                    return true;
                } else {
                    console.log('What screenshot of your application would you like to include?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide any testing information users may use to test your application. ( REQUIRED )',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('What testing information would you like to include for user testing?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please provide information on future development so users made add to your code. ( REQUIRED )',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('What information about future developments would you like to provide for any contributors?');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'licensing',
            message: 'Please select a license format from the list below.',
            choices: [
                'No License',
                'Apache License 2.0',
                'Boost Software License 1.0',
                "BSD 2-Clause 'Simplified' License",
                "BSD 3-Clause 'New' or 'Revised' License",
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 1.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU General Public License v3.0',
                'GNU Lesser General Public License v3.0',
                'MIT License',
                'Mozilla Public License 2.0',
                'Open Data Commons',
                'The Unlicense',
            ],
            validate: licensingInput => {
                if (licensingInput) {
                    return true;
                } else {
                    console.log('What licensing would you like to choose?');
                    return false;
                }
            }
        }
    ])
};


promptUser()
    .then(data => {
        return generateMarkdown(data); 
    })
    .then(write => {
        return writeFile(write);
    })
    .then(writeResponse =>{
        console.log(writeResponse);
        console.log('README response complete!');
    })
    .catch(err => {
        console.log(err);
    });