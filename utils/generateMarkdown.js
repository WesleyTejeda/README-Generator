var userData = require("../index.js");
function generateMarkdown(data) {
  return `
# ${data.title}

## Description\n
${data.description}

## Table of Contents\n
${data.table}

## Installation\n
${data.install}

## Usage\n
${data.usage}

## License\n
${data.license}

## Contributing\n
${data.contribute}

## Tests\n
${data.tests}

## Questions\n
${data.questions}

`;
}

module.exports = generateMarkdown(userData);