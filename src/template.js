// TASK: Create a function to generate markdown for README
const renderLicenseBadge = require("./renderLicensing");
const generateMarkdown = (data) => {
  return ` 
  # ${data.name} 
  ${renderLicenseBadge(data.licensing)}
  ## Table of Contents 
  
  * [Description](#description)
  * [Installation](#installation)
  * [GitHub](#github)
  * [Languages](#languages)
  * [Usage](#usage)
  * [Screenshot](#screenshot)
  * [Test](#test)
  * [Contributions](#contributions)
  * [Questions](#questions)
  * [Credits](#credits)
  * [License](#license)
  
  ## Description

  ${data.description}
  
  ## Installation

  ${data.installation}  
  Link to GitHub Repository: ${data.repositoryLink}
  
  ## Languages
  
  ${data.languages}
  
  ## Usage

  ${data.usage}

  ## Screenshot
    
  ![${data.name}](${data.screenshot})

  ## Test

  ${data.test}

  ## Contributions

  ${data.contributions}

  ## Questions  

  GitHub Link: https://github.com/${data.github}
  
  Contact via Email: ${data.email}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.licensing)}
  
    `;
};

module.exports = generateMarkdown;
