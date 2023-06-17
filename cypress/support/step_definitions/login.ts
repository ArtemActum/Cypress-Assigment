/* eslint-disable new-cap */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import MyAccount from '../../page-objects/pages/myAccountPage'
import HomePage from '../../page-objects/pages/homePage'

const homePage = new HomePage()
const myAccountPage = new MyAccount()

// before(function () {
//   cy.log('accept cookie being set')
//   cy.setCookie('FastSignup', 'FastSignupCreated', { domain: 'christies.com' })
//   cy.setCookie('OptanonAlertBoxClosed', new Date().toString(), { domain: 'christies.com' })
// })

Given('I open Homepage', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I login to my account.', () => {
  homePage.login()
  homePage.clickMyAccount()
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
