import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../page-objects/pages/homePage'
import SearchPage from '../../page-objects/pages/searchPage'

const homePage = new HomePage()
const searchPage = new SearchPage()

Given('I open Home Page.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I add {string} to search input.', (text) => {
  homePage.addTextToSearchInput(text)
  cy.url().should('include', 'Test')
})

When('I add special char to search input.', () => {
  homePage.addTextToSearchInput('%')
})

Then('Check search result items.', () => {
  searchPage.searchResultItems().should('have.length', 0)
})
