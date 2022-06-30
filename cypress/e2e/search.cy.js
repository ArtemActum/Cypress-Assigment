import BasePage from "../../page-objects/BasePage"
import Navbar from "../../page-objects/components/Navbar"
import LoginPage from "../../page-objects/pages/LoginPage"
import { url, login_password, login_username } from "/config"

describe("Search tests", () => {
	before(function () {
		cy.visit(url)
		BasePage.acceptCookies()
	})

	it("check if search is not case sensitive", () => {
		Navbar.search("Ralston Crawford")
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
