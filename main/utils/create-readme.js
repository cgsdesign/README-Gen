const fs = require('fs');
//object destrucure
// writing files
 

const writeFile = fileContent => {
const {projectName, 
  description, 
  installInstructions,
  usage,
  license,
  badge,
  contact,
  contributors
} = fileContent

const readMeGenerated = `

# ${projectName}
${badge}
## Description 

* ${description}

## Table of Contents (Optional)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
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

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## <a name="contributing">Contributing</a>
[Contributor Covenant](https://www.contributor-covenant.org/)

## <a name="test">Tests</a>

## <a name="questions">Questions</a>
* contact me at [${contact}](https://${contact})

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