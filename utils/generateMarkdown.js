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

var userData = 
  {
    title: "",
    description: "",
    table: "",
    install: "",
    usage: "",
    license: "",
    contribute: "",
    tests: "",
    questions: "",
  }

module.exports = generateMarkdown(userData);