import BasePage from '../basePage'

export default class MyAccount extends BasePage {
  // Elements
  welcomeTitleDiv = '#ctl00_MainContent_pnlWelcome div'
  nameUser = '#ctl00_lblUser'
  buyingSection =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(1) > .chr-page-nav__link > .chr-action'

  // Page Object Methods
  checkNameOfUser() {
    cy.get('#ctl00_lblUser').contains('Artem M')
  }
}
