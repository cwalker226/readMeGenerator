const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

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
        type: "editor",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "install"
    },
    {
        message: "Provide instructions and examples for use.",
        name: "usage"
    },
    {
        type: "list",
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

async function writeToFile(fileName, data) {
    await writeFileAsync(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
    }) ;
}

function init() {
    inquirer.prompt(questions).then(async function(answers){
        try{
            // console.log(answers);
            const userData = await api.getUser(answers.username);
            // console.log(userData.data.data.user);
            const data = Object.assign({}, answers, userData.data.data.user);
            // console.log(data);
            const markStr = markdown.generateMarkdown(data);
            // console.log(markStr);
            writeToFile("README.md", markStr);
        } catch(err){
            console.log(err);
        }
        
    });
}

init();
