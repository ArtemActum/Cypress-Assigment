export default class Navbar {
	static clickOnLogo() {
		cy.get(".chr-header__link-site  svg").click()
	}

	static search(text) {
		cy.get("#site-search").type(`${text} {enter}`)
	}

	static searchWithMagnifyingGlass(text) {
		cy.get("#site-search").type(`${text}`)
		cy.get(
			".chr-header__user-zone > :nth-child(1) > chr-autocomplete-input.hydrated > .chr-autocomplete-input > .chr-autocomplete-input__wrapper > chr-button.hydrated > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon"
		).click()
	}

	static displaySignInButton() {
		cy.isVisible("")
	}

	static clickSignIn() {
		cy.get(
			".hydrated > .chr-button.chr-button--light.chr-button--primary.chr-button--sm"
		).click()
	}

	static clickSettings() {
		cy.contains("Settings").click()
	}

	static logout() {
		cy.get(
			'chr-button[aria-label="User navigation"] > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon'
		).click()
		cy.get(
			".chr-user-nav__list > :nth-child(2) > .hydrated > .chr-button > .chr-button__text"
		).click()
	}

	static switchlanguageZh() {
		cy.get(".div:nth-of-type(2) > a:nth-of-type(1)").click()
		cy.url().should("include", "lang=zh")
		cy.go("back")
	}

	static switchlanguageZhCn() {
		cy.get(".div:nth-of-type(2) > a:nth-of-type(2)").click()
		cy.url().should("include", "lang=zh-cn")
		cy.go("back")
	}

	static myAccount() {
		cy.get(
			'chr-button[aria-label="User navigation"] > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon'
		).click()
		cy.get(".chr-user-nav__link").click()
	}
}
