var fs = require("fs");
var inquirer = require("inquirer");
var fileName = "./generated_files/newREADME.md";


const questions = [
    "What is your name?",
    "What is your email?",
    "What is your project title?",
    "Give a description for your project.",
    "What are the different sections in your table of contents?",
    "Describe how to use your app.",
    "What license would you like for this app?",
    "Give your message for future contributors.",
    "Tests",
    "How to reach you in case of questions"
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
            message: questions[5],
            name: "usage"
        },
        {
            type: "input",
            message: questions[6],
            name: "licenses"
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
        // module.exports = data;
        var responses =
        {
          title: userResp.projecTitle,
          description: userResp.description,
          table: userResp.contents,
          install: "None yet",
          usage: userResp.usage,
          license: userResp.licenses,
          contribute: userResp.contributing,
          tests: userResp.tests,
          questions: userResp.questions,
          name: userResp.userName,
          email: userResp.userEmail
        }
        console.log(responses);
        var generateMarkdown = require("./utils/generateMarkdown.js");
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