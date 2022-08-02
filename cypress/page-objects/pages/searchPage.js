import BasePage from '../basePage'

export default class searchPage extends BasePage {
  // Elements
  searchResultItems = 'chr-search-lots-view hydrated'
  noResultsFoundDiv = '.chr-search-results__no-results.container-fluid'
  availableLots = '[data-qa="tab-available_lots"]>span'
  soldLots = 'button#tab-sold_lots > span:nth-of-type(1)'
  articles = '[data-qa="tab-articles"]>span'
  nameOfLot = '.chr-lot-tile__link'

  // Page Object Methods

  checkSearchResultItems() {
    cy.get(this.searchResultItems)
  }

  clickSoldLots() {
    cy.get(this.soldLots).click()
  }

  checkNameOfLot() {
    cy.get(this.nameOfLot)
      .should('be.visible')
      .and('contain.text', 'Ralston Crawford')
  }
}
