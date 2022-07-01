import BasePage from "../../page-objects/basePage"
import Navbar from "../../page-objects/components/navbar"
import LoginPage from "../../page-objects/pages/loginPage"
import { url, login_password, login_username } from "/config"

describe("Search tests", () => {
	const loginPage = new LoginPage()
	const navbar = new Navbar()
	const basePage = new BasePage()

	before(function () {
		cy.visit(url)
		basePage.acceptCookies()
	})

	it("check if search is not case sensitive", () => {
		navbar.search("Ralston Crawford")
		cy.url().should("include", "/mychristies/activities")
		navbar.search("rAlStON cRaWford")
	})

	it("check if magnifying glass is working", () => {
		navbar.searchWithMagnifyingGlass("Ralston Crawford")
	})

	it("some negative tests", () => {
		navbar.search("<script></script>")
		navbar.search("%")
		navbar.search("#")
		navbar.search(" ") // 1 space
	})
})
