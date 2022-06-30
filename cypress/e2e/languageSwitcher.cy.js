import BasePage from "../../page-objects/BasePage"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import { url, login_password, login_username } from "/config"

describe("Language Switcher Functionality", () => {
	before(function () {
		cy.visit(url)
		BasePage.acceptCookies()
	})

	it("Switch ZH language", () => {
		Navbar.switchlanguageZh()
	})

	it("Switch Zh-Cn language", () => {
		Navbar.switchlanguageZhCn()
	})
})
