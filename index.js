const inquirer = require('inquirer');
const fs = require('fs');
const {writeFile} = require('./utils/create-readme');//MANDITORY to link file

const promptUser = () => {
  return inquirer.prompt([
    //Title
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?',
      validate: projectInput => {
        if (projectInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    //description
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
        //instalation instructions
        {
          type: 'input',
          name: 'installInstructions',
          message: 'What do you do to instal?',
          validate: instalInput => {
            if (instalInput) {
              return true;
            } else {
              console.log('Please enter instal instructions!')
            }
          }
        },
        //usage -what used
        {
          type: 'checkbox',
          name: 'usage',
          message: 'What did you use to make this project? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'Node']
        },
        //primary used
        {
          type: 'checkbox',
          name: 'usage',
          message: 'What did you use to make this project? (Check ONE)',
          choices: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
          validate: instalInput => {
            if (instalInput) {
              return true;
            } else {
              console.log('Please enter a primary coding language!')
            }
          }
          
        },
        //license
        {
          type: 'checkbox',
          name: 'license',
          message: 'What license do you want? (Check one)',
          choices: ['MIT', 'Apache 2.0', 'MPL-2.0', 'Artistic license 2.0'],
          validate: instalInput => {
            if (instalInput) {
              return true;
            } else {
              console.log('Please enter a license!')
            }
          }
        },
        //contributors
        {
          type: 'input',
          name: 'contributors',
          message: 'Who helped?(include contact info if have)',
        },
        //test
        {
          type: 'input',
          name: 'test',
          message: 'How was the code tested?',
          validate: contentsInput => {
            if (contentsInput) {
              return true;
            } else {
              console.log('Please enter a test method!')
            }
          }
        },
        //contact
        {
          type: 'input',
          name: 'contact',
          message: 'What email can they contact you at?',
          validate: contentsInput => {
            if (contentsInput) {
              return true;
            } else {
              return true;
            }
          }
        },
        //git hub
        {
          type: 'input',
          name: 'github',
          message: 'What is your FULL github?',
          validate: contentsInput => {
            if (contentsInput) {
              return true;
            } else {
              console.log('Please enter a github!')
            }
          }
        }
  ]);
};

  
promptUser()
  .then((data) => {
    writeFile(data)})