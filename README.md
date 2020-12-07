# Team_Profile_Generator

https://sanjothebay.github.io/Team_Profile_Generator/

https://github.com/sanjothebay/Team_Profile_Generator


# Unit 10 OOP Homework: Team_Profile_Generator


## Instructions

Build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the 
team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has 
completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the 
[common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

#User Concept:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

The application is using:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
The Inquirer Packet will need ot be exported you can do this by npm i 

The application will be invoked by using the following command:

```bash
node app.js  To run the App
npm run test To run t he tests 
```
* The App is Using the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role   
with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The App Creates a command-line application that dynamically generates a professional `team.html` file from a user's input using the 
[Inquirer package](https://www.npmjs.com/package/inquirer).

*The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

* The App is runing Node CLI to gather information about each employee.

* Below is an example of what your application looks like. when the Questions are competed.




## Getting Started

* Created a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` so that the directory isn't tracked or uploaded to GitHub. 
this was done before installing any npm dependencies.

* included a `package.json` with the required dependencies. this was create by running `npm init` when the first set up of the project, before installing any dependencies.

* A walkthrough video that demonstrates the functionality of the README generator a link to the video is included.

 ---

There are also unit tests to help you build the classes necessary.

It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

🎗 Remember, you can run the tests at any time with `npm run test`

It is recommended that you start with a directory structure that looks like this:

```
lib/           // classes and helper code
node_modeule   // Node Modeule
output/        // rendered output This File was Created as in README.md
  team.htm     // Renders Teams information output
templates/     // HTML template(s)
  Employee.html
  Engineer.html
  Intern.html
  Manager.html
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
.getignore/
app.js/         // Runs the application
package-lock.json/
package.json/
README.md/
```



### Classes
`Employee` is the parent class and will extend to the other Classes `Manager`, `Engineer`, `Intern`,

### User input

The project prompt the user to build an engineering team. 


### Roster output

The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. For Each team member.




## Bonus

* Use validation to ensure that the information provided is in the proper expected format.

* Add the application to your portfolio.




## Submission Video

* A video demonstrating the entirety of the app's functionality 




