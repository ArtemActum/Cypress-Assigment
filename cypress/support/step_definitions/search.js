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
})

Then('Check in url this {string}.', (text) => {
  cy.url().should('include', text)
})
