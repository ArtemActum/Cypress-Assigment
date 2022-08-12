import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../page-objects/pages/homePage'

const homePage = new HomePage()

Given('I open HomePage', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I Switch {string}.', (languages) => {
  homePage.switchLanguageTo(languages)
})

Then('Url should include {string}.', (attribute) => {
  cy.url().should('include', attribute)
})
