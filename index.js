var fs = require("fs");
var inquirer = require("inquirer");
var fileName = "./generated_files/newREADME.md";
var data = require("./utils/generateMarkdown.js");

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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err)
            throw err;

        console.log("Success, check the GeneratedReadMe folder to view your README.md");
    });
}

function init() {
    writeToFile(fileName,data);
}

init();
