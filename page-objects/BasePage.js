export default class BasePage {
  // Elements
  forgottenLink = '.chr-modal .chr-body.chr-link--underline'

  // Page Object Methods
  pause(ms) {
    cy.wait(ms)
  }
  logInfo(message) {
    cy.log(message)
  }

  setMobileViewport() {
    cy.viewport('iphone-x')
  }

  setTableViewport() {
    cy.viewport('ipad-2')
  }

  setDesktopViewport() {
    cy.viewport('macbook-13')
  }

  setLargeDesktopViewport() {
    //cy.viewport('macbook-15')
    cy.viewport(1980, 1080)
  }

  acceptCookies() {
    cy.get('#onetrust-accept-btn-handler').click()
  }

  setCookie() {
    const date = new Date().toISOString()
    console.log(window.location)
    cy.setCookie('FastSignup', 'FastSignupCreated')
    cy.setCookie('OptanonAlertBoxClosed', date).then(() => {
      cy.reload()
    })
  }
}
