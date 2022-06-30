import { url, login_password, login_username } from "/config"
import LoginPage from "../../page-objects/pages/LoginPage"
import Navbar from "../../page-objects/components/Navbar"
import BasePage from "../../page-objects/BasePage"

describe("Login Success Test", () => {
	before(function () {
		cy.visit(url)
		cy.get("#onetrust-accept-btn-handler").click()
	})

	it("should login into application", () => {
		LoginPage.login(login_username, login_password)
		Navbar.myAccount()
		cy.url().should("include", "/mychristies/activities")
	})

	it("should logout from application", () => {
		Navbar.logout()
		// Navbar.displaySignInButton()
	})

	describe("Login Failed Test", () => {
		before(function () {
			cy.visit(url)
			BasePage.acceptCookies()
		})
		it("should try to login with invalid credentials", () => {
			LoginPage.login("invalid username", "invalid password").should(
				"have.value",
				"invalid username"
			)
		})

		it("should display error message", () => {
			LoginPage.displayErrorMessage()
		})
	})
})
