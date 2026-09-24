**Project Agenda**: To perform E2E testing on a web application using the test automation tool Cypress
**Description**: As part of this project, go ahead and deploy the below-given Angular application on your local:
https://github.com/Simplilearn-Edu/ATE_PEP1_Testing_Using_Cypress.git

This application is based on the most popular Angular dashboard template (ngx-admin) and uses the Nebular module set.
Once the application is deployed, we will use Cypress to perform E2E testing. You will install Cypress and start the Test Runner to perform testing.

You will compile the cypress.config.js file and create the Cypress project structure. In the Cypress folder, create an E2E testing project structure.

Validate various forms, layouts, modals, overlays, and other components on the application. Use different locators to test elements like textboxes, buttons, checkboxes, and radio buttons on the application.
Use Cypress assertions to validate the code wherever required. Add Cypress wait to the code for synchronization.

**Tools Required: Nodejs v14.8.0, Cypress, and Visual Studio Code**
Hint: Since the lab comes with node v17 by default, use NVM manager to change the version to 14.8.0; for more information, see the project's README.md file

**Set up Scenario:**
•
Use Visual Studio and clone the repository: https://github.com/Simplilearn- Edu/ATE_PEP1_Testing_Using_Cypress.git
•
Compile the code repository and run the code using npm
•
The application will be available at localhost: 4200
•
In the same folder, install Cypress and start the Cypress test runner
•
Update the cypress.config.js file with details of specPattern and baseURL
•
Create a file with the name Test.spec.js and describe your first project

**Detailed Scenario 2:**

Detailed Scenario 2:
•
1>Create a test case to open the website on localhost:4200. Under the form layout, write code to find all three radio buttons
•
2>Inspect the first radio button, check if it is enabled or not, and then click on it
•
3>Now, inspect radio button 2, check if it is enabled or not, and then click on it
•
4>Validate that radio button 1 should not be selected. Use cypress assertion
•
5>Validate whether radio button 3 is disabled or not. If radio button 3 is disabled, then use Cypress Assertion
