import HomePage from '../../page-objects/pages/homePage'
import MyAccount from '../../page-objects/pages/myAccountPage'

describe('Login Functionality Tests', {defaultCommandTimeout: 20000},() => {
  const homePage = new HomePage()
  const myAccountPage = new MyAccount()

  beforeEach(() => {
    homePage.open()
    // cy.visit('/').then(() => {
    //   homePage.setCookie()
    // })
  })

  it('login into application', () => {
    homePage.login()
    homePage.clickMyAccount()
    myAccountPage.checkNameUser()
    cy.url().should('include', '/mychristies/activities')
  })

  it('should try to login with invalid credentials', () => {
    homePage.invalidlogin()
    homePage.displayErrorMessage()
  })
})
