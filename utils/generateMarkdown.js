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
  ${data.name}\n
  ${data.email}
`;
}

module.exports = generateMarkdown;