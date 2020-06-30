function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
${data.table}

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
${data.questions}\n
  Github username: ${data.name}\n
  Email address: ${data.email}
`;
}

module.exports = generateMarkdown;