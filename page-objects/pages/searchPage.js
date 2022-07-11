import BasePage from '../basePage'

export default class searchPage extends BasePage {
  // Elements

  //searchResultItem = '.chr-lot-tile'
  //searchResultItems = '.grid row chr-lot-tiles__wrapper'
  searchResultItems = 'chr-search-lots-view hydrated'
  //searchResultItems = '.chr-search-results__tab-bar-wrapper'
  noResultsFoundDiv = '.chr-search-results__no-results.container-fluid'
  availableLots = '[data-qa="tab-available_lots"]>span'
  soldLots = 'button#tab-sold_lots > span:nth-of-type(1)'
  articles = '[data-qa="tab-articles"]>span'
}
