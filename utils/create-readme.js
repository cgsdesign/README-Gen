const fs = require('fs');
//object destrucure
// writing files
 

const writeFile = fileContent => {
const {
  projectName, 
  description, 
  installInstructions,
  usage,
  license,
  contact,
  otherLanguages,
  primary,
  contributors,
  test,
  github
} = fileContent

const readMeGenerated = `

# ${projectName}
![license](https://img.shields.io/badge/${license}-License-brightgreen)

## Description 

${description}

## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badge](#badge)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## <a name="installation">Installation</a>
${installInstructions}

## <a name="usage">Usage</a> 
* ${usage}

## <a name="credits">Credits</a>
* ${contributors}

## <a name="license">License</a>
* ${license}

## <a name="badge">Badges & Primary Languages</a>

![badge](https://img.shields.io/badge/${primary}-primary-orange)
* Other Languages/Resources Used: ${otherLanguages}

## <a name="contributing">Contributing</a>
* [Contributor Covenant](https://www.contributor-covenant.org/)

## <a name="test">Tests</a>
* ${test}

## <a name="questions">Questions</a>
contact me at: 
* github: [${github}](${github})
* email: [${contact}](${contact})
`

//End to return promise
    return new Promise((resolve, reject) => {
      fs.writeFile('./output/README.md', readMeGenerated, err => {
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