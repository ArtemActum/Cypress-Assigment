import SearchPage from '../../page-objects/pages/searchPage'
import HomePage from '../../page-objects/pages/homePage'

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
    searchPage.checkSearchResultItems().should('have.length.at.least', 1)
  })

  it('check if search is not case sensitive', () => {
    homePage.addTextToSearchInput('raLstOn CraWfOrd')
    searchPage.clickSoldLots()
    searchPage.checkNameOfLot()
  })

  it('check if magnifying glass is working', () => {
    homePage.searchWithMagnifyingGlass('Test')
    searchPage.checkSearchResultItems()
  })

  it('check if special chars does not work', () => {
    homePage.addTextToSearchInput('%')
    searchPage.searchResultItems().should('have.length', 0)
    homePage.addTextToSearchInput('+')
    searchPage.searchResultItems().should('be.visible')
  })
})
