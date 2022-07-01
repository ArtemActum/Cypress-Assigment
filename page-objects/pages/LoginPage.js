import BasePage from "../basePage"

export default class LoginPage extends BasePage {
	static login(username, password) {
		cy.get(
			".chr-header__user-zone > :nth-child(1) > :nth-child(2) > .chr-button"
		).click()
		cy.get("#username").click().type(username)
		cy.get("#password").type(password)
		cy.get(
			".chr-button.chr-button--full-width.chr-button--lg.chr-button--light.chr-button--primary > .chr-button__text"
		).click()
	}

	static displayErrorMessage() {
		cy.contains(
			"The email address and password that you entered did not match our records. Please double-check and try again, or contact Client Services for further assistance."
		).should("have.visible")
		//cy.isVisible(".content-zone chr-label chr-color-red-alert")
	}

	static checkFuncAuctions() {
		cy.get(".li:nth-of-type(1) > .chr-action.chr-main-nav__link").click()
		cy.go("back")
	}
}
