import BasePage from '../basePage'

export default class MyAccount extends BasePage {
  // Elements
  welcomeTitleDiv = '#ctl00_MainContent_pnlWelcome div'
  nameUser = '#ctl00_lblUser'
  buyingSection =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(1) > .chr-page-nav__link > .chr-action'
  logoutBtn =
    '.chr-button.chr-button--lg.chr-button--light.chr-button--link.d-flex > .chr-action.chr-button__text'
  buyingBtn =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(1) > .chr-page-nav__link > .chr-action'
  sellingBtn =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(2) > .chr-page-nav__link > .chr-action'
  interestsBtn =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(3) > .chr-page-nav__link > .chr-action'
  settingsBtn = 'li:nth-of-type(4) > .chr-page-nav__link > .chr-action'
  receiveEmailAlerts =
    'div:nth-of-type(1) > .myc-radio > .chr-radio > .chr-radio__circle'
  commPreferBtn =
    '.chr-tooltip-container div:nth-of-type(3) .chr-page-nav__list-item:nth-of-type(3) .chr-action'
  yesSelector =
    'div:nth-of-type(1) > .myc-radio > .chr-radio > .chr-radio__circle'
  noneSelector =
    'div:nth-of-type(3) > .myc-radio > .chr-radio > .chr-radio__circle'
  // Page Object Methods
  logout() {
    cy.get(this.logoutBtn).click()
  }

  clickBuying() {
    cy.get(this.buyingBtn).click()
  }

  clickSelling() {
    cy.get(this.sellingBtn).click()
  }

  clickInterests() {
    cy.get(this.interestsBtn).click()
  }

  clickSettings() {
    cy.get(this.settingsBtn).click()
  }
}
