Cypress.Commands.add('isVisible', (selector) => {
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.contains('Sign in').click()
})

Cypress.Commands.add('setCookie', () => {
  const date = new Date().toISOString()
  cy.log(window.location.toString())
  cy.setCookie('FastSignup', 'FastSignupCreated')
  cy.setCookie('OptanonAlertBoxClosed', date).then(() => {
    cy.reload()
  })
})

// setCookie() {
//   const date = new Date().toISOString()
//   console.log(window.location)
//   cy.setCookie('FastSignup', 'FastSignupCreated')
//   cy.setCookie('OptanonAlertBoxClosed', date).then(() => {
//     cy.reload()
//   })
// }

// type definitions for Cypress object "cy"
/// <reference types="cypress" />
