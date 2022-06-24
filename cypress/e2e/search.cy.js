import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import { url, login_password, login_username } from "/config"

describe("Search tests", () => {
	before(function () {
		cy.visit(url)
		cy.get("#onetrust-accept-btn-handler").click()
	})

	it("positive tests", () => {
		Navbar.search("a")
	})

	it("some negative tests", () => {})
})
