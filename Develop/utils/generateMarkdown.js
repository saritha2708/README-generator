// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'GPLv3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';  
    default:
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';  
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const content = `
  [![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  # ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

   Check out the code and my other projects at [${data.githubUsername}](https://github.com/${data.githubUsername}).
   
   If you have any questions reach out to me at [${data.email}](mailto:${data.email}).

  `;

  return content;
}

module.exports = generateMarkdown;
