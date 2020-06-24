const inquirer = require("inquirer");

const fs = require("fs"); 

const questions = [
  {
    type: "input",
    message: "what is your GitHub username?",
    name: "Username",
  },

  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project",
    name: "Description",
  },
  {
    type: "input",
    message: "What needs to be installed to run this APP?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What licensed was used?",
    name: "License",
  },

  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
  },
  {
    type: "input",
    message: "How do you test this App?",
    name: "Test",
  },
  {
    type: "input",
    message: "Please leave a question for the users",
    name: "Questions",
  },
];

function writeToFile(fileName, data) {}



function init() {}

init();
