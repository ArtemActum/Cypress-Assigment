import { login_password, login_username } from '/config'
import HomePage from '../page-objects/pages/homePage'

describe('Login Functionality Tests', () => {
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
  })

    it('login into application', () => {
      homePage.login(login_username, login_password)
      homePage.myAccount()
      cy.url().should('include', '/mychristies/activities')
    })

  it('should try to login with invalid credentials', () => {
    homePage.login('invalid username', 'invalid password')
    homePage.displayErrorMessage().should('be.visible').and('contain.text', 'The email address and password that you entered did not match our records.')
  })
})
