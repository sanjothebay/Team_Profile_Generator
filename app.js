const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let TeamMembersArray = [];




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
      },
    ])

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
        
        fs.writeFile(outputPath, render(TeamMembersArray), (err) =>{
          if (err) throw err ;
         console.log("Wrote to file!") ;
          })
        }
      
    });
}

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
        fs.writeFile(outputPath, render(TeamMembersArray), (err) =>{
          if (err) throw err ;
         console.log("Wrote to file!") ;
          })
        }
    });
}

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
        fs.writeFile(outputPath, render(TeamMembersArray), (err) =>{
          if (err) throw err ;
         console.log("Wrote to file!") ;
          })
        }
    });
}
ManagerQuestions();