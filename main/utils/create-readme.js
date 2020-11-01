const fs = require('fs');
//object destrucure
// writing files
const writeFile = fileContent => {
const {projectName} = fileContent
const readMeTest = `this is awesome ${projectName}`
    return new Promise((resolve, reject) => {
      fs.writeFile('./output/README.md', readMeTest, err => {
        if (err) {
          reject(err);
          return;
        } 
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

  module.exports = { writeFile };