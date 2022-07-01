import { url, login_password, login_username } from "/config"
import LoginPage from "../../page-objects/pages/loginPage"
import Navbar from "../../page-objects/components/navbar"
import BasePage from "../../page-objects/basePage"

describe("Login Success Test", () => {
	const loginPage = new LoginPage()
	const navbar = new Navbar()
	const basePage = new BasePage()

	before(function () {
		cy.visit(url)
		basePage.acceptCookies()
	})

	it("should login into application", () => {
		loginPage.login(login_username, login_password)
		navbar.myAccount()
		cy.url().should("include", "/mychristies/activities")
	})

	describe("Login Failed Test", () => {
		before(function () {
			cy.visit(url)
			basePage.acceptCookies()
		})
		it("should try to login with invalid credentials", () => {
			loginPage
				.login("invalid username", "invalid password")
				.should("have.value", "invalid username")
			loginPage.displayErrorMessage()
		})
	})
})
