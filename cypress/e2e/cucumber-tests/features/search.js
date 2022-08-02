import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../page-objects/pages/homePage'

const homePage = new HomePage()

Given('I open HomePage.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I add text to search input.', () => {
  homePage.addTextToSearchInput('Test')
  cy.url().should('include', 'Test')
})

When('I add special char to search input.', () => {
  homePage.addTextToSearchInput('%')
})

Then('Check search result items.', () => {
  searchPage.searchResultItems().should('have.length', 0)
})
