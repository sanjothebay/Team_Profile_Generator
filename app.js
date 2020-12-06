const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// use the inquire pacjage to get the qustions needed ...
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not. created one and place it as in the README file Sructure

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
// create instances for the team member
// const manager = new Manager ();
// const engineer = new Engineer ();
// const intern = new Intern ();


let TeamMembersArray = [];
// array of questions for user
// const questions =
// function to call the question prompts

function ManagerQuestions() {
  inquirer
    .prompt([
      // manager`s set of questions
      {
        type: "input",
        message: "What is your Manager`s Name?",
        name: "managersName",
      },
      {
        type: "input",
        message: "What is Manager`s ID?",
        name: "managersId",
      },
      {
        type: "input",
        message: "What is Manager`s Email?",
        name: "managersEmail",
      },
      {
        type: "input",
        message: "What is Manager`s Office Number?",
        name: "managersOfficeNumber",
      },
      {
        type: "list",
        message: "Which type of team member you like to add?",
        name: "typeOfTeamMember",
        choices: ["Engineer", "Intern", "None"],
        /*if, if/else, and else statement to run function again if 
    they choose to add a team member Else render the HTML (*/
      },
    ])

    //function to initialize program/unction call to initialize program
    .then((response) => {
      console.log(response);
      const manager = new Manager (response.managersName, response.managersId, response.managersEmail, response.managersOfficeNumber,);
      TeamMembersArray.push(manager);
      if (response.typeOfTeamMember === "Engineer") {
        engineersQuestions();
      } else if (response.typeOfTeamMember === "Intern") {
        InternQuestions();
      } else {
        response.typeOfTeamMember === "None";
        
        fs.writeFile(outputPath, render(TeamMembersArray), "utf-8");
      }
    });
}
// Engineer set of questions
// function to call the question prompts

function engineersQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Engineer`s Name?",
        name: "engineersName",
      },
      {
        type: "input",
        message: "What is Engineer`s ID?",
        name: "engineersId",
      },
      {
        type: "input",
        message: "What is Engineer`s Email?",
        name: "engineersEmail",
      },
      {
        type: "input",
        message: "What is Engineer`s GitHub User Name?",
        name: "engineersGitHubUserName",
      },
      {
        type: "list",
        message: "Which type of team member you like to add?",
        name: "typeOfTeamMember",
        choices: ["Engineer", "Intern", "None"],
        /*if, if/else, and else statement to run function again if 
    they choose to add a team member Else render the HTML */
      },
    ])
    .then((response) => {
      console.log(response);
      // fs.writeToFile();
      const engineer = new Engineer (response.engineersName, response.engineersId, response.engineersEmail, response.engineersGitHubUserName,);
      TeamMembersArray.push(engineer);
      if (response.typeOfTeamMember === "Engineer") {
        engineersQuestions();
      } else if (response.typeOfTeamMember === "Intern") {
        InternQuestions();
      } else {
        response.typeOfTeamMember === "None";
        render(TeamMembersArray);
        fs.writeFile(outputPath, render(TeamMembersArray), "utf-8");
      }
    });
}

// Intern set of questions
// function to call the question prompts
function InternQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Intern`s Name?",
        name: "internsName",
      },
      {
        type: "input",
        message: "What is Intern`s ID?",
        name: "internsId",
      },
      {
        type: "input",
        message: "What is Intern`s Email?",
        name: "internsEmail",
      },
      {
        type: "input",
        message: "What is Intern`s School Name?",
        name: "internsSchoolName",
      },
      {
        type: "list",
        message: "Which Type of Team Member would you like to add?",
        name: "typeOfTeamMember",
        choices: ["Engineer", "Intern", "None"],
        /*if, if/else, and else statement to run function again if 
    they choose to add a team member Else render the HTML */
      },
    ])
    .then((response) => {
      console.log(response);
      // fs.writeToFile();
      const intern = new Intern (response.internsName, response.internsId, response.internsEmail, response.internsSchoolName,);
      TeamMembersArray.push(intern);
      if (response.typeOfTeamMember === "Engineer") {
        engineersQuestions();
      } else if (response.typeOfTeamMember === "Intern") {
        InternQuestions();
      } else {
        response.typeOfTeamMember === "None";
        render(TeamMembersArray);
        fs.writeFile(outputPath, render(TeamMembersArray), "utf-8");
      }
    });
}

ManagerQuestions();
