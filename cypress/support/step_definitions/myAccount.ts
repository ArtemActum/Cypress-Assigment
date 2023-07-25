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

Given('I log in to MyC', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
    homePage.login()
    homePage.clickMyAccount()
    myAccountPage.checkNameUser()
    cy.url().should('include', '/mychristies/activities')
  })
})

Given('I log in to MyC by account with 25% of KYC', () => {
  cy.visit('/').then(() => {
    homePage.setCookie()
    homePage.loginKYC25Percent()
    homePage.clickMyAccount()
    myAccountPage.checkNameUser25KYC()
    cy.url().should('include', '/mychristies/activities')
  })
})

When('I view the KYC progress bar.',() => {
    myAccountPage.checkKYCBar()
})

When('I view the submenu sections.',() => {
  myAccountPage.checkBuyingSections()
  myAccountPage.checkSellingSections()
  myAccountPage.checkInterestSections()
  myAccountPage.checkSettingsSections()
})

Then('The sections should be clickable and be displayed correctly.', () => {
    myAccountPage.ClickableBuyingSection()
    myAccountPage.ClickableSellingSection()
    myAccountPage.ClickableInterestsSection()
    myAccountPage.ClickableSettingsSection()
})

Then('KYC progress bar should be displayed correctly.', () => {
  myAccountPage.checkKYCText()
})

