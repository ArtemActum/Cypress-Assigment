import { Given, And, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../page-objects/pages/homePage'

const homePage = new HomePage()

Given('I open HomePage.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})
