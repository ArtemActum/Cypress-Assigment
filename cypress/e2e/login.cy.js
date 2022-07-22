import { loginPassword, loginUsername } from '/config'
import HomePage from '../page-objects/pages/homePage'
import MyAccount from '../page-objects/pages/myAccountPage'

describe('Login Functionality Tests', () => {
  const homePage = new HomePage()
  const myAccountPage = new MyAccount()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
  })

  it('login into application', () => {
    homePage.login(loginUsername, loginPassword)
    homePage.clickMyAccount()
    myAccountPage.checkNameUser()
    cy.url().should('include', '/mychristies/activities')
  })

  it('should try to login with invalid credentials', () => {
    homePage.login('invalid username', 'invalid password')
    homePage.displayErrorMessage()
  })
})
