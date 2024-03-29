import BasePage from '../basePage'

export default class MyAccount extends BasePage {
  // Elements
  welcomeTitleDiv = '#ctl00_MainContent_pnlWelcome div'
  nameUser = '#ctl00_lblUser'
  logoutBtn =
    '.chr-button.chr-button--lg.chr-button--light.chr-button--link.d-flex > .chr-action.chr-button__text'
  // buyingBtn = '.myc-header__nav > :nth-child(1) > .chr-page-nav__link'
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
  editAddressBookBtn = "[data-modal-id='addressBookModal'] .chr-label-medium"

  addNewAddressBtn = '#lnkAdd'
  countryInput = '#ddlCountry'
  buildingNameInput =
    "#tAddressBook [class='mb-5']:nth-of-type(3) .chr-text-input__field"
  address2Input =
    "#tAddressBook [class='mb-5']:nth-of-type(4) .chr-text-input__field"
  address3Input =
    "#tAddressBook [class='mb-5']:nth-of-type(5) .chr-text-input__field"
  cityInput = '#txtCity'
  provinceUKInput = '#ddlProvince'
  // provinceCZInput = '#ddlProvince'
  postalCodeInput = '#txtPostalCode'
  saveBtn = '#btnSaveAddress'
  okayBtn = '#confirmationModal .chr-button--full-width'
  actualAdrress = '.catalogueAddress [selected]'
  adsressSelector = '#ctl00_MainContent_ddlCatalogueMailingAdress'
  adressBookInput = '#ddlAddress'
  deleteBtn = '#btnDeleteAddress'
  deleteConfirmationBtn = '#btnDelDelete'
  closeBtn =
    "#confirmationModal [class='chr-button chr-button--primary chr-button--lg chr-button--light chr-button--full-width btnClose mt-2']"

  citySelector = '#ddlUScity'
  countySelector = '#ddlUSCounty'
  postalCodeUSAInput = '#txtUSzip'
  kycProgressBar = '#ctl00_divCompleteProfile'
  kycProgressBarText = 'body.en:nth-child(2) div.main-container:nth-child(20) div.x-responsive-section form:nth-child(1) div.myc-account-progress:nth-child(18) div.chr-body-s.mr-1.progress-mob > span.mr-2'
  kycInfoIcon = 'body.en:nth-child(2) div.main-container:nth-child(20) div.x-responsive-section div.myc-account-progress:nth-child(18) chr-tooltip.mob-tooltips.chr-tooltip.hydrated div.chr-tooltip__wrapper.chr-tooltip__wrapper--clickable chr-outside-interaction.hydrated chr-button.hydrated button.chr-button.chr-button--icon.chr-button--sm.chr-button--dark.chr-button--icon-left.chr-button--icon-xs.chr-tooltip__btn chr-icon.hydrated div.chr-icon__wrapper > span.chr-icon.chr-icon--xs'
  kycInfoToolTip = '#tooltip-8f5c7a0f-4ed4-4be0-9786-7eabbdd41c16'
  clientSevicesLink = 'body.en:nth-child(2) div.main-container:nth-child(20) div.x-responsive-section div.myc-account-progress:nth-child(18) chr-tooltip.mob-tooltips.chr-tooltip.hydrated div.chr-tooltip__wrapper.chr-tooltip__wrapper--clickable chr-outside-interaction.hydrated div.chr-tooltip__position.chr-tooltip__position--center div.chr-tooltip__content.chr-tooltip__content--clickable.chr-tooltip__content--center div.desktop-chatwithus-show:nth-child(4) > a.chr-link--underline'
  FAQPage = 'body.en:nth-child(2) div.container1:nth-child(13) div.x-responsive-section:nth-child(2) div.container:nth-child(5) div.row.faq:nth-child(5) > h2:nth-child(1)'
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

  clickViewAuctionCalendarBtn() {
    cy.get(this.viewAuctionCalendarBtn).click()
    cy.url().should('include', 'calendar')
  }

  selectDollarCurrency() {
    cy.get(this.currencySelector).select('U.S. Dollars')
  }

  addNewCZAddress() {
    this.selectCZCountryInput()
    cy.get(this.buildingNameInput).type('Argentinska')
    cy.get(this.address2Input).type('Argentinska')
    cy.get(this.address3Input).type('Argentinska')
    cy.get(this.cityInput).type('Prague')
    cy.get(this.postalCodeInput).type('10600')
    cy.get(this.saveBtn).click()
    this.clickOkayBtn()
    cy.get(this.adsressSelector).select('Argentinska')
    cy.get(this.adsressSelector).should('contain.text', 'Argentinska')
  }

  deleteCZAddress() {
    cy.get(this.adsressSelector).select(0)
    this.clickEditAddressBookBtn()
    cy.get(this.adressBookInput).select('Argentinska')
    cy.get(this.deleteBtn).click()
    cy.get(this.deleteConfirmationBtn).click()
    cy.get(this.closeBtn).click()
    cy.get(this.adressBookInput).should('not.contain.text', 'Argentinska')
  }

  addNewUKAddress() {
    cy.get(this.countryInput).select(1)
    cy.get(this.countryInput).should('have.value', 'GB|United Kingdom|2')
    cy.get(this.buildingNameInput).type('Kensington')
    cy.get(this.cityInput).type('London')
    cy.get(this.provinceUKInput).select(2).should('contain.text', 'Angus')
    cy.get(this.postalCodeInput).type('W8 4QY')
    cy.get(this.saveBtn).click()
    this.clickOkayBtn()
    cy.get(this.adsressSelector).select('Kensington')
    cy.get(this.adsressSelector).should('contain.text', 'Kensington')
  }

  deleteUKAddress() {
    cy.get(this.adsressSelector).select(0)
    this.clickEditAddressBookBtn()
    cy.get(this.adressBookInput).select('Kensington')
    cy.get(this.deleteBtn).click()
    cy.get(this.deleteConfirmationBtn).click()
    cy.get(this.closeBtn).click()
    cy.get(this.adressBookInput).should('not.contain.text', 'Kensington')
  }

  addNewUSAAddress() {
    cy.get(this.countryInput).select(2).should('have.value', 'US|USA|1')
    cy.get(this.buildingNameInput).type('Newport')
    cy.get(this.postalCodeUSAInput).type('02840')
    cy.get(this.citySelector).select('Newport')
    cy.get(this.countySelector).select('Newport')
    cy.get(this.saveBtn).click()
    this.clickOkayBtn()
    cy.get(this.adsressSelector).select('Newport')
    cy.get(this.adsressSelector).should('contain.text', 'Newport')
  }

  deleteUSAAddress() {
    cy.get(this.adsressSelector).select(0)
    this.clickEditAddressBookBtn()
    cy.get(this.adressBookInput).select('Newport')
    cy.get(this.deleteBtn).click()
    cy.get(this.deleteConfirmationBtn).click()
    cy.get(this.closeBtn).click()
    cy.get(this.adressBookInput).should('not.contain.text', 'Newport')
  }
  clickEditAddressBookBtn() {
    cy.get(this.editAddressBookBtn).click()
  }

  clickAddNewAddressBtn() {
    cy.get(this.addNewAddressBtn).click()
  }

  selectCZCountryInput() {
    cy.get(this.countryInput).select('Czech Republic')
    cy.get(this.countryInput).should('have.value', 'CZ|Czech Republic|57')
  }

  clickOkayBtn() {
    cy.get(this.okayBtn).click()
  }

  navigateToAddressBookForm() {
    this.clickSettings()
    this.clickEditAddressBookBtn()
    this.clickAddNewAddressBtn()
  }

  checkNameUser() {
    cy.get(this.nameUser).should('be.visible').and('contain.text', 'Zoe Angela')
  }

  checkNameUser25KYC() {
    cy.get(this.nameUser).should('be.visible').and('contain.text', 'Angela Zoe UK Specimen')
  }

  checkNameUser50KYC() {
    cy.get(this.nameUser).should('be.visible').and('contain.text', 'Jelani Sample')
  }

  checkNameUser75KYC() {
    cy.get(this.nameUser).should('be.visible').and('contain.text', 'Mariana Tkachenko')
  }

  checkNameUser100KYC() {
    cy.get(this.nameUser).should('be.visible').and('contain.text', 'Miss Amy Louise Sample')
  }

  checkBuyingSections() {
    cy.get(this.buyingBtn).should('be.visible').and('contain.text', 'BUYING')
  }

  checkSellingSections() {
    cy.get(this.sellingBtn).should('be.visible').and('contain.text', 'SELLING')
  }

  checkInterestSections() {
    cy.get(this.interestsBtn).should('be.visible').and('contain.text', 'INTERESTS')
  }

  checkSettingsSections() {
    cy.get(this.settingsBtn).should('be.visible').and('contain.text', 'SETTINGS')
  }

  ClickableBuyingSection() {
    this.clickBuying()
    cy.url().should('include', '/mychristies/activities')
  }

  ClickableSellingSection() {
    this.clickSelling()
    cy.url().should('include', '/mychristies/Consignments')
  }

  ClickableInterestsSection() {
    this.clickInterests()
    cy.url().should('include', '/mychristies/preference_center')
  }

  ClickableSettingsSection() {
    this.clickSettings()
    cy.url().should('include', '/mychristies/my_account_settings')
  }

  checkKYCText() {
    cy.get(this.kycProgressBarText).should('be.visible').and('contain.text', 'Your profile is 25% complete.')
  }

  checkKYCBar() {
    cy.get(this.kycProgressBar).should('be.visible')
  }

  checkNotKYCBar() {
    cy.get(this.kycProgressBar).should('not.be.visible')
  }

  check50KYCText() {
    cy.get(this.kycProgressBar).should('be.visible').and('contain.text', 'Your profile is 50% complete.')
  }

  check75KYCText() {
    cy.get(this.kycProgressBar).should('be.visible').and('contain.text', 'Your profile is 75% complete.')
  }

  hoverOverKYCInfoIcon() {
    cy.get(this.kycInfoIcon).click()
  }

  checkKYCToolTip() {
    cy.get(this.kycInfoToolTip).should('be.visible').and('contain.text', 'Your profile is 25% complete. You can follow auctions and lots but can’t place bids yet. Add your contact details and verify your identity to complete your profile.', { force: true })
  }

  clickontheServicesLink() {
    cy.get(this.clientSevicesLink).should('be.visible').click()
  }

  checkFAQPage() {
    cy.get(this.FAQPage).should('be.visible')
  }


  



}
