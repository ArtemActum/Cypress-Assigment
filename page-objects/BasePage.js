export default class BasePage {
	static pause(ms) {
		cy.wait(ms)
	}
	static logInfo(message) {
		cy.log(message)
	}

	static setMobileViewport() {
		cy.viewport("iphone-x")
	}

	static setTableViewport() {
		cy.viewport("ipad-2")
	}

	static setDesktopViewport() {
		cy.viewport("macbook-13")
	}

	static setLargeDesktopViewport() {
		//cy.viewport('macbook-15')
		cy.viewport(1980, 1080)
	}

	acceptCookies() {
		cy.get("#onetrust-accept-btn-handler").click()
	}
}
