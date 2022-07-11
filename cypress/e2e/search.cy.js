import SearchPage from '../page-objects/pages/searchPage'
import HomePage from '../page-objects/pages/homePage'

describe('Search tests', () => {
  const searchPage = new SearchPage()
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
  })

  it('check if search is working', () => {
    homePage.search('Test')
    cy.url().should('include', 'Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('check if search is not case sensitive', () => {
    homePage.search('raLstOn CraWfOrd')
    cy.get(searchPage.soldLots).click()
    cy.get('.chr-lot-tile__link')
      .should('be.visible')
      .and('contain.text', 'Ralston Crawford')
  })

  it('check if magnifying glass is working', () => {
    homePage.searchWithMagnifyingGlass('Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('special chars', () => {
    homePage.search('%')
    cy.get(searchPage.searchResultItems).should('have.length', 0)
    homePage.search('+')
    cy.get(searchPage.noResultsFoundDiv).should('be.visible')
  })
})
