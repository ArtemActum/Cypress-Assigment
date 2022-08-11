import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import MyAccount from '../../../page-objects/pages/myAccountPage'
import HomePage from '../../../page-objects/pages/homePage'

const homePage = new HomePage()
const myAccountPage = new MyAccount()

Given('I open HomePage.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I login to my account.', () => {
  homePage.login()
  homePage.clickMyAccount()
})

When('I login to my account with invalid credentials', () => {
  homePage.invalidlogin()
})

Then('Check name user and check url.', () => {
  myAccountPage.checkNameUser()
  cy.url().should('include', '/mychristies/activities')
})

Then('I get error message that credentials did not match our records.', () => {
  homePage
    .displayErrorMessage()
    .should('be.visible')
    .and(
      'contain.text',
      'The email address and password that you entered did not match our records.',
    )
})