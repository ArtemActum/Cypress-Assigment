export default class BasePage {
  // Elements
  tradChineseLink = '[lang="zh"]'
  simpleChineseLink = '[lang="zh-cn"]'
  englishLink = '[lang="en"]'
  loginBtn =
    '.chr-button.chr-button--light.chr-button--primary.chr-button--sm > .chr-button__text'
  myAccountBtn =
    '.chr-button.chr-button--link.chr-button--lg.chr-button--light.chr-button--icon-left'
  forgottenLink = '.chr-modal .chr-body.chr-link--underline'
  userInput = '#username'
  passwdInput = '#password'
  submitBtn =
    '.chr-button.chr-button--primary.chr-button--lg.chr-button--light.chr-button--full-width'
  createNewAccountBtn =
    '.chr-modal-login .chr-button.chr-button--secondary.chr-button--lg.chr-button--light.chr-button--full-width'
  signInBtn =
    '.chr-button.chr-button--full-width.chr-button--lg.chr-button--light.chr-button--primary > .chr-button__text'
  inputErrorText = '.chr-text-input__error>span'
  loginErrorText = '.content-zone.chr-label.chr-color-red-alert'
  forgottenLink = '.chr-modal .chr-body.chr-link--underline'
  searchInput = '#site-search'
  searchBtn =
    'header .chr-button.chr-button--icon.chr-button--lg.chr-button--light.chr-button--icon-left'
  ErrorMessage =
    '.align-items-center.d-inline-flex.mb-5 > .chr-color-red-alert.chr-label.content-zone'
  magnifyingGlass =
    "form[role='search']  .hydrated > .chr-button.chr-button--icon.chr-button--icon-left.chr-button--lg.chr-button--light > .hydrated  .chr-icon.chr-icon--sm"

  // Page Object Methods

  setCookie() {
    const date = new Date().toISOString()
    console.log(window.location)
    cy.setCookie('FastSignup', 'FastSignupCreated')
    cy.setCookie('OptanonAlertBoxClosed', date).then(() => {
      cy.reload()
    })
  }

  login(username, password) {
    cy.get(this.loginBtn).click()
    cy.get(this.userInput).click().type(username)
    cy.get(this.passwdInput).type(password)
    cy.get(this.signInBtn).click()
  }

  displayErrorMessage() {
    cy.get(this.ErrorMessage)
  }

  addTextToSearchInput(text) {
    cy.get(this.searchInput).type(`${text} {enter}`)
  }

  searchWithMagnifyingGlass(text) {
    cy.get(this.searchInput).type(`${text}`)
    cy.get(this.magnifyingGlass).click()
  }

  switchlanguageZh() {
    cy.get(this.tradChineseLink).click()
    cy.url().should('include', 'lang=zh')
  }

  switchlanguageZhCn() {
    cy.get(this.simpleChineseLink).click()
    cy.url().should('include', 'lang=zh-cn')
  }

  switchlanguageEn() {
    cy.get(this.tradChineseLink).click()
    cy.get(this.englishLink).click()
    cy.url().should('include', 'sc_lang=en')
  }

  myAccount() {
    cy.get(this.myAccountBtn).click()
  }
}
