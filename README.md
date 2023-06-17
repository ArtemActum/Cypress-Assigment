# Cypress-Assigment

This repository contains the code for the Cypress Assignment project. The project aims to demonstrate the usage of Cypress, a JavaScript-based end-to-end testing framework. Automated tests are prepared for integration environment https://integration.christies.com/


### Tests written for:
- Home page (language switcher)
- Search bar
- Calendar page (tests for filters)
- My account page (login, adding new addresses to address book)

Mocha and Cucumber reports are prepared. 

![image](https://github.com/ArtemActum/Cypress-Assigment/assets/102807433/c64b43f5-7efe-4a9a-9270-4b64af87ed53)

### Installation
To run the tests locally, follow these steps:

1. Clone the repository:
`git clone https://github.com/ArtemActum/Cypress-Assigment.git`
2. Navigate to the project directory:
`cd Cypress-Assigment`
3. Install the dependencies:
`npm install`
4. Ensure that you have the required dependencies installed:
    - Node.js
    - npm

###  Usage
To execute the Cypress tests, use the following command:
`npm test`

This command will run Cypress in headless mode and generate test reports in the terminal.<br> The tests are configured to run on the default browser provided by Cypress.<br> 

If you want to run the tests in an interactive mode and view the Cypress test runner, use the command:
`npm run cypress:open`

This will open the Cypress Test Runner, allowing you to select and run individual test cases.

###  Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

When contributing, please ensure that you follow the existing coding style and conventions. <br> Also, provide clear and descriptive commit messages for your changes.
