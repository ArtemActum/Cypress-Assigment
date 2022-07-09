import BasePage from '../../page-objects/basePage'
import Navbar from '../../page-objects/components/navbar'
import LoginPage from '../../page-objects/pages/loginPage'
import { url, login_password, login_username } from '/config'
import SearchPage from '../../page-objects/pages/searchPage'

describe('Search tests', () => {
  const loginPage = new LoginPage()
  const navbar = new Navbar()
  const basePage = new BasePage()
  const searchPage = new SearchPage()

  beforeEach(() => {
    cy.visit(url).then(() => {
      basePage.setCookie()
    })
  })

  it('check if search is working', () => {
    navbar.search('Test')
    cy.url().should('include', 'Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('check if search is not case sensitive', () => {
    navbar.search('raLstOn CraWfOrd')
    cy.get(searchPage.soldLots).click()
    //cy.url().should('include', 'raLstOn CraWfOrd')
    cy.get('.chr-lot-tile__link').contains('Ralston Crawford')
  })

  it('check if magnifying glass is working', () => {
    navbar.searchWithMagnifyingGlass('Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('special chars', () => {
    navbar.search('%')
    cy.get(searchPage.searchResultItems).should('have.length', 0)
    navbar.search('+')
    cy.get(searchPage.noResultsFoundDiv).should('be.visible')
  })
})
