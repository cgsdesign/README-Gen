const inquirer = require('inquirer');
const fs = require('fs');
// const fs = require('inquirer');
const {writeFile} = require('./utils/create-readme');

const promptUser = () => {
  return inquirer.prompt([
    //Title
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name? (Required)',
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
      message: 'Enter a description of your project (Required)',
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
        //license
        {
          type: 'checkbox',
          name: 'license',
          message: 'What license do you want? (Check one)',
          choices: ['MIT', 'Apache 2.0', 'MPL-2.0', 'Artistic license 2.0']
        },
        //contributors
        {
          type: 'input',
          name: 'contributors',
          message: 'Who helped?(include contact info if have)',
          validate: contentsInput => {
            if (contentsInput) {
              return true;
            } else {
              return true;
            }
          }
        },
        //contact
        {
          type: 'input',
          name: 'contact',
          message: 'What is yor email?',
          validate: contentsInput => {
            if (contentsInput) {
              return true;
            } else {
              return true;
            }
          }
        },
  ]);
};

  
promptUser()
  .then((data) => {
    writeFile(data)})