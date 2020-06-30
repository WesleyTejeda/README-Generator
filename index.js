const fs = require("fs");
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
var fileName = "./generated_files/newREADME.md";

const questions = [
    "What is your github username?",
    "What is your email?",
    "What is your project title?",
    "Give a description for your project.",
    "What are the different sections in your table of contents?",
    "Describe how to use your app.",
    "What license would you like for this app?",
    "Give your message for future contributors.",
    "Has your code passed any tests?",
    "How to reach you in case of questions",
    "Are there any installation details you would like to include?"
];
function init() {
    promptUser();
}

init();
function promptUser(){
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "userName"
        },
        {
            type: "input",
            message: questions[1],
            name: "userEmail"
        },
        {
            type: "input",
            message: questions[2],
            name: "projecTitle"
        },
        {
            type: "input",
            message: questions[3],
            name: "description"
        },
        {
            type: "input",
            message: questions[4],
            name: "contents"
        },
        {
            type: "input",
            message: questions[10],
            name: "install"
        },
        {
            type: "input",
            message: questions[5],
            name: "usage"
        },
        {
            type: "checkbox",
            status: () => choices,
            message: questions[6],
            name: "licenses",
            choices: [
                {name: "MIT", value : "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", checked: false},
                {name: "Apache 2.0", value : "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", checked: false},
                {name: "ODbL", value : "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)", checked: false},
                {name: "None", value : "", checked: false},
            ]
        },
        {
            type: "input",
            message: questions[7],
            name: "contributing"
        },
        {
            type: "input",
            message: questions[8],
            name: "tests"
        },
        {
            type: "input",
            message: questions[9],
            name: "questions"
        }
    ]).then(function(userResp){
        console.log(userResp);
        responses =
        {
          title: userResp.projecTitle,
          description: userResp.description,
          table: userResp.contents,
          install: userResp.install,
          usage: userResp.usage,
          license: userResp.licenses,
          contribute: userResp.contributing,
          tests: userResp.tests,
          questions: userResp.questions,
          name: userResp.userName,
          email: userResp.userEmail
        }
        let generateMarkdown = require("./utils/generateMarkdown.js");
        writeToFile(fileName,generateMarkdown(responses));
    })
  };
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err)
            throw err;

        console.log("Success, check the GeneratedReadMe folder to view your README.md");
    });
}