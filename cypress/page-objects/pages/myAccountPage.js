import BasePage from '../basePage'

export default class MyAccount extends BasePage {
  // Elements
  welcomeTitleDiv = '#ctl00_MainContent_pnlWelcome div'
  nameUser = '#ctl00_lblUser'
  logoutBtn =
    '.chr-button.chr-button--lg.chr-button--light.chr-button--link.d-flex > .chr-action.chr-button__text'
  //buyingBtn = '.myc-header__nav > :nth-child(1) > .chr-page-nav__link'
  buyingBtn =
    '.myc-header__nav > :nth-child(1) > .chr-page-nav__link > .chr-action'
  sellingBtn =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(2) > .chr-page-nav__link > .chr-action'
  interestsBtn =
    '.container-fluid.myc-header > nav > ul > li:nth-of-type(3) > .chr-page-nav__link > .chr-action'
  settingsBtn = ':nth-child(4) > .chr-page-nav__link > .chr-action'
  receiveEmailAlerts =
    'div:nth-of-type(1) > .myc-radio > .chr-radio > .chr-radio__circle'
  commPreferBtn =
    '.chr-tooltip-container div:nth-of-type(3) .chr-page-nav__list-item:nth-of-type(3) .chr-action'
  yesSelector =
    'div:nth-of-type(1) > .myc-radio > .chr-radio > .chr-radio__circle'
  noneSelector =
    'div:nth-of-type(3) > .myc-radio > .chr-radio > .chr-radio__circle'
  currencySelector = '#ctl00_MainContent_ddlCurrency'
  viewAuctionCalendarBtn =
    '.chr-button.chr-button--light.chr-button--primary.chr-button--sm'
  completeProfileBtn =
    '.chr-body-s.chr-color-white.chr-link--dark.chr-link--underline'
  editAddressBookBtn =
    'div#Account Settings > .chr-button.chr-button--icon.chr-button--icon-left.chr-button--icon-xs.chr-button--lg.chr-button--light.p-0  .chr-label-medium'
  addNewAddressBtn =
    '.chr-button chr-button--secondary chr-button--lg chr-button--light chr-button--full-width chr-button--icon-left chr-button--icon-xs'
  countryInput = '#ddlCountry'
  buildingNameInput =
    "#tAddressBook [class='mb-5']:nth-of-type(3) .chr-text-input__field"
  address2Input =
    "#tAddressBook [class='mb-5']:nth-of-type(4) .chr-text-input__field"
  address3Input =
    "#tAddressBook [class='mb-5']:nth-of-type(5) .chr-text-input__field"
  cityInput = '#txtCity'
  provinceInput = '#txtProvince'
  postalCodeInput = '#txtPostalCode'
  saveBtn = '#btnSaveAddress'
  okayBtn = '#confirmationModal .chr-button--full-width'
  actualAdrress = '.catalogueAddress [selected]'
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

  addNewAddress(city, postalCode, address) {
    cy.get(this.buildingNameInput).type(address)
    cy.get(this.address2Input).type(address)
    cy.get(this.address3Input).type(address)
    cy.get(this.cityInput).type(city)
    cy.get(this.provinceInput).type(city)
    cy.get(this.postalCodeInput).type(postalCode)
    cy.get(this.saveBtn).click()
  }

  
}
