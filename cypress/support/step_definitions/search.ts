/* eslint-disable new-cap */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../page-objects/pages/homePage'

const homePage = new HomePage()

Given('I open Home Page.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I add {string} to search input.', (text: string) => {
  homePage.addTextToSearchInput(text)
})

Then('Check in url this {string}.', (text: string) => {
  cy.url().should('include', text)
})
