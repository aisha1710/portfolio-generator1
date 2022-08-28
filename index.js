const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = ({ username, github, linkedin }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Name ${username}</h1>
    <p>Github ${github}</p>
    <p>LinkedIn ${linkedin}</p>
  </body>
</html>`;

inquirer
  .prompt([
    {
      name: "username",
      message: "what is your name",
      type: "input",
    },
    {
      name: "github",
      message: "what is Github URL",
      type: "input",
    },
    {
      name: "linkedin",
      message: "what is your LinkedIn URL",
      type: "input",
    },
  ])
  .then((response) => {
    const text = generateHTML(response);
    fs.writeFile("index.html", text, (err) => {
      err ? console.log(err) : console.log("success!");
    });
  });
