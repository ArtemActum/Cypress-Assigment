import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../../../page-objects/pages/homePage'

const homePage = new HomePage()

Given('I open HomePage.', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
  })
})

When('I Switch Language to simple Chinese.', function () {
  homePage.switchlanguageZhCn()
})

Then('Url should include attribute.', function () {
  cy.url().should('include', 'lang=zh-cn')
})
