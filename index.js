const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        message: "Enter your GitHub username.",
        name: "username"
    },
    {
        message: "Enter the title of your project.",
        name: "title"
    },
    {
        message: "Enter a description for your project.",
        name: "desc"
    },
    {
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "install"
    },
    {
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        message: "Choose a license that works best for your project.",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU GPLv3",
            "MIT",
            "ISC"
        ]
    },
    {
        message: "List your collaborators, if any.",
        name: "credits"
    },
    {
        message: "Provide examples on how to run your test",
        name: "tests"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
    }) ;
}

function init() {

}

init();
