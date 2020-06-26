var userData = require("../index.js");
function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

# ${data.table}

# ${data.install}

# ${data.usage}

# ${data.license}

# ${data.contribute}

# ${data.tests}

# ${data.questions}

`;
}

module.exports = generateMarkdown(userData);