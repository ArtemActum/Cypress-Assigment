import BasePage from '../basePage'

export default class HomePage extends BasePage {
  // Elements
  logo = '.chr-header__link-site  svg'
  signIn = '.chr-header__user-zone .chr-button__text'

  // Page Object Methods
  clickOnLogo() {
    cy.get('.chr-header__link-site  svg').click()
  }

  search(text) {
    cy.get('#site-search').type(`${text} {enter}`)
  }
}
