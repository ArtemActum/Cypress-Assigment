Cypress.Commands.add("isVisible", selector => {
	cy.get(selector).should("be.visible")
})

Cypress.Commands.add("login", (username, password) => {
	cy.get("#username").type(username)
	cy.get("#password").type(password)
	cy.contains("Sign in").click()
})
