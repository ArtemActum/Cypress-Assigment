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
    homePage.addTextToSearchInput('Test')
    cy.url().should('include', 'Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('check if search is not case sensitive', () => {
    homePage.addTextToSearchInput('raLstOn CraWfOrd')
    cy.get(searchPage.soldLots).click()
    cy.get(searchPage.nameOfLot)
      .should('be.visible')
      .and('contain.text', 'Ralston Crawford')
  })

  it('check if magnifying glass is working', () => {
    homePage.searchWithMagnifyingGlass('Test')
    cy.get(searchPage.searchResultItems).should('have.length.at.least', 1)
  })

  it('special chars', () => {
    homePage.addTextToSearchInput('%')
    cy.get(searchPage.searchResultItems).should('have.length', 0)
    homePage.addTextToSearchInput('+')
    cy.get(searchPage.noResultsFoundDiv).should('be.visible')
  })
})
