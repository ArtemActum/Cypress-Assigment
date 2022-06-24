import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import { url, login_password, login_username } from "/config"

describe("Language Switcher Functionality", () => {
	before(function () {
		cy.visit(url)
		cy.get("#onetrust-accept-btn-handler").click()
	})

	it("positive tests", () => {
		Navbar.switchlanguageZh()
	})

	it("some negative tests", () => {})
})
