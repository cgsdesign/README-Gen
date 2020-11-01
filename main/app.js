const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-readme');

const promptUser = () => {
  return inquirer.prompt([
    //Title
    {
      type: 'input',
      name: 'project name',
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
    //table of contents
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'What is included in your README:',
      validate: contentsInput => {
        if (contentsInput) {
          return true;
        } else {
          console.log('Please enter a table of contenents!');
          return false;
        }
      }
    },
        //instalation instructions
        {
          type: 'input',
          name: 'instal-insructions',
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
  ]);
};

const promptProject = portfolioData => {
  console.log(`
=================
Add a New Project
=================
`);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });