import { login_password, login_username } from '/config'
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
    homePage.login(login_username, login_password)
    homePage.myAccount()
    cy.get(myAccountPage.nameUser).should('be.visible').and('contain.text', 'Artem M')
    cy.url().should('include', '/mychristies/activities')
  })

  it('should try to login with invalid credentials', () => {
    homePage.login('invalid username', 'invalid password')
    homePage
      .displayErrorMessage()
      .should('be.visible')
      .and(
        'contain.text',
        'The email address and password that you entered did not match our records.',
      )
  })
})
