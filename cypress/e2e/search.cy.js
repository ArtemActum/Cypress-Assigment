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
		BasePage.acceptCookies()
	})

	it("check if search is not case sensitive", () => {
		Navbar.search("Ralston Crawford")
		cy.url().should("include", "/mychristies/activities")
		Navbar.search("rAlStON cRaWford")
	})

	it("check if magnifying glass is working", () => {
		Navbar.searchWithMagnifyingGlass("Ralston Crawford")
	})

	it("some negative tests", () => {
		Navbar.search("<script></script>")
		Navbar.search("%")
		Navbar.search("#")
		Navbar.search(" ") // 1 space
	})
})
