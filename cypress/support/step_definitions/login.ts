/* eslint-disable new-cap */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import MyAccount from '../../page-objects/pages/myAccountPage'
import HomePage from '../../page-objects/pages/homePage'

const homePage = new HomePage()
const myAccountPage = new MyAccount()

Given('I open Homepage', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I login to my account.', () => {
  homePage.login()
  homePage.clickMyAccount()
  cy.on('uncaught:exception', (err, runnable) => {
    // console.log(`Uncaught Exception Thrown. ${err.name}`)
    // console.log(`Uncaught Exception Thrown. ${runnable.body}`)
  
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})

When(
  'I login to my account with invalid {string} and {string}.',
  (username?: string, password?: string) => {
    homePage.invalidlogin(username, password)
  },
)

Then('Check name user and check url.', () => {
  myAccountPage.checkNameUser()
  cy.url().should('include', '/mychristies/activities')
})

Then('I get error message that credentials did not match our records.', () => {
  homePage.displayErrorMessage()
})
