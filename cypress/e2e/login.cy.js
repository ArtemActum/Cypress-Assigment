import { url, login_password, login_username } from '/config'
import LoginPage from '../page-objects/pages/loginPage'
import Navbar from '../page-objects/components/navbar'
import BasePage from '../page-objects/basePage'

describe('Login Functionality Tests', () => {
  const loginPage = new LoginPage()
  const navbar = new Navbar()
  const basePage = new BasePage()

  beforeEach(() => {
    cy.visit(url).then(() => {
      basePage.setCookie()
    })
  })

  it('login into application', () => {
    loginPage.login(login_username, login_password)
    navbar.myAccount()
    cy.url().should('include', '/mychristies/activities')
  })

  it('should try to login with invalid credentials', () => {
    loginPage.login('invalid username', 'invalid password')
    loginPage.displayErrorMessage()
  })
})
