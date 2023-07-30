export default class BasePage {
  // Elements

  tradChineseLink = '[lang="zh"]'
  simpleChineseLink = '[lang="zh-cn"]'
  englishLink = '[lang="en"]'
  loginBtn = '.chr-header__user-zone .chr-button__text'
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
  searchInput = '#site-search'
  searchBtn =
    'header .chr-button.chr-button--icon.chr-button--lg.chr-button--light.chr-button--icon-left'
  ErrorMessage =
    '.align-items-center.d-inline-flex.mb-5 > .chr-color-red-alert.chr-label.content-zone'
  magnifyingGlass =
    "form[role='search']  .hydrated > .chr-button.chr-button--icon.chr-button--icon-left.chr-button--lg.chr-button--light > .hydrated  .chr-icon.chr-icon--sm"
  nameUser = '#ctl00_lblUser'
  
  // Page Object Methods

  // open(path) {
  //   cy.visit(path).then(() => {
  //     cy.setCookies()
  //   })
  // }

  open(path) {
    cy.visit(path).then(() => {
      this.setCookie()
    })
  }

  setCookie() {
    const date = new Date().toISOString()
    console.log(window.location)
    cy.setCookie('FastSignup', 'FastSignupCreated')
    cy.setCookie('OptanonAlertBoxClosed', date).then(() => {
      cy.reload()
    })
  }

  login(
    loginUsername = 'int-1306202-1@yopmail.com',
    loginPassword = 'Zaqxsw111',
  ) {
    cy.get(this.loginBtn).click()
    cy.get(this.userInput).click().type(loginUsername, {force: true, delay: 0})
    cy.get(this.passwdInput).type(loginPassword, {force: true, delay: 0})
    cy.get(this.signInBtn).click()
  }

  loginKYC25Percent(
    loginUsername = 'int-tw2-20221220-01@yopmail.com',
    loginPassword = 'Test1234',
  ) {
    cy.get(this.loginBtn).click()
    cy.get(this.userInput).click().type(loginUsername, {force: true, delay: 1000})
    cy.get(this.passwdInput).type(loginPassword, {force: true, delay: 1000})
    cy.get(this.signInBtn).click()
  }

  invalidlogin(
    invalidUsername = 'invalid username',
    invalidPassword = 'invalid password',
  ) {
    cy.get(this.loginBtn).click()
    cy.get(this.userInput).click().type(invalidUsername)
    cy.get(this.passwdInput).type(invalidPassword)
    cy.get(this.signInBtn).click()
  }

  displayErrorMessage() {
    cy.get(this.ErrorMessage).should(
      'contain.text',
      'The email address and password that you entered did not match our records.',
    )
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
  langAttrZhCnlang = 'lang=zh-cn'

  switchlanguageEn() {
    cy.get(this.tradChineseLink).click()
    cy.get(this.englishLink).click()
    cy.url().should('include', 'lang=en')
  }

  clickMyAccount() {
    cy.get(this.myAccountBtn).click()
  }

  switchLanguageTo(language) {
    switch (language) {
      case 'zh':
        cy.get(this.tradChineseLink).click()
        break
      case 'zh-cn':
        cy.get(this.simpleChineseLink).click()
        break
      case 'en':
        // cy.get(this.englishLink).click()
        cy.get(this.tradChineseLink).click()
        cy.get(this.englishLink).click()
        cy.url().should('include', 'lang=en')
        break
      default:
        break
    }
  }
}
