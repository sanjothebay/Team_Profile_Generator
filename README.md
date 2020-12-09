# Team_Profile_Generator

https://sanjothebay.github.io/Team_Profile_Generator/

https://github.com/sanjothebay/Team_Profile_Generator


# Table of contents

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
3. [Classes](#Classes)
4. [Roster output](#Roster_output)
5. [Submission Video](#Submission_Video)


## Instruction <a name="Instruction"></a>

Build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then 
information about the 
team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When 
the user has 
completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 
Following the 
[common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

##User Concept:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

##The application is using:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
The Inquirer Packet will need ot be exported you can do this by npm i 

The application will be invoked by using the following command:

```bash
node app.js  To run the App
npm run test To run t he tests 
```
* The App is Using the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based 
on their role   
with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* The App Creates a command-line application that dynamically generates a professional `team.html` file from a user's input using the 
[Inquirer package](https://www.npmjs.com/package/inquirer).

* The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input 
from the user.

* The App is runing Node CLI to gather information about each employee.

* Below is an example of what your application should looks like. when the Questions are competed.

![image](https://user-images.githubusercontent.com/67298961/101312185-bc08dc80-3818-11eb-8913-bfffc49ed2d2.png)

* Below is what My application looks like once the css is added and the Questions are competed.

![image](https://user-images.githubusercontent.com/67298961/101424336-90413180-38c0-11eb-8b3d-2c23c5dd104e.png)


## Getting Started <a name="Getting_Started"></a>

* Created a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` so that the directory isn't tracked or uploaded to GitHub. 
this was done before installing any npm dependencies.

* This is where i Created a the array of questions and exported the packages to use for the application.

* included a `package.json` with the required dependencies. this was create by running `npm init` when the first set up of the project, before installing any 
dependencies.

* A walkthrough video that demonstrates the functionality of the test `app.js` and the Creation of the `team.html` a link to the video is included.

 ---

##directory structure:

```
lib/           // classes and helper code
node_modeule   // Node Modeule
output/        // rendered output This File was Created as in README.md
  style.css    // use for styling the render output.
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

### Classes <a name="Classes"></a>
`Employee` is the parent class and will extend to the other Classes `Manager`, `Engineer`, `Intern`,

![image](https://user-images.githubusercontent.com/67298961/101312482-78fb3900-3819-11eb-9f14-551232e9ae81.png)

### Test Results

![4pcl05](https://user-images.githubusercontent.com/67298961/101310391-603c5480-3814-11eb-81cd-eb29e8b1dbdc.gif)

![image](https://user-images.githubusercontent.com/67298961/101312388-405b5f80-3819-11eb-9a49-725ab8a35712.png)

### User input

The project prompt the user to build an engineering team. 

![4pcm69](https://user-images.githubusercontent.com/67298961/101311095-456adf80-3816-11eb-9e6e-ed477601b27b.gif)

![image](https://user-images.githubusercontent.com/67298961/101312293-038f6880-3819-11eb-9827-078317df873f.png)


### Roster output <a name="Roster_output"></a>

The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. For Each team member.

![4pcnir](https://user-images.githubusercontent.com/67298961/101312125-97146980-3818-11eb-9dd7-0f5887c032dd.gif)

![image](https://user-images.githubusercontent.com/67298961/101424336-90413180-38c0-11eb-8b3d-2c23c5dd104e.png)


## Bonus

* validated to ensure that the information provided is in the proper expected format.

![image](https://user-images.githubusercontent.com/67298961/101425911-95eb4700-38c1-11eb-9f01-149dc9357275.png)

* Added the application to my portfolio.

![image](https://user-images.githubusercontent.com/67298961/101315054-77cd0a80-381f-11eb-839c-0fa50cb59f56.png)


## Submission Video <a name="Submission_Video"></a>

* Link to video demonstrating the entirety of the app's functionality 

Click Here:
[Project explanation](https://drive.google.com/file/d/1IYe13hOnHLd3jK5EmJ5MAEj5iVt5T8db/view?usp=sharing)

https://drive.google.com/file/d/1IYe13hOnHLd3jK5EmJ5MAEj5iVt5T8db/view?usp=sharing
