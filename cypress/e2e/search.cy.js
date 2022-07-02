import BasePage from "../../page-objects/basePage"
import Navbar from "../../page-objects/components/navbar"
import LoginPage from "../../page-objects/pages/loginPage"
import { url, login_password, login_username } from "/config"
import SearchPage from "../../page-objects/pages/searchPage"

describe("Search tests", () => {
	const loginPage = new LoginPage()
	const navbar = new Navbar()
	const basePage = new BasePage()
	const searchPage = new SearchPage()

	before(function () {
		cy.visit(url)
		basePage.acceptCookies()
	})

	// it("check if search is working", () => {
	// 	navbar.search("Ralston Crawford")
	// 	cy.get(search.searchResultItems).should("have.length.at.least", 1)
	// })

	// it("check if search is not case sensitive", () => {
	// 	navbar.search("rAlStON cRaWford")
	// 	cy.get(".chr-lot-tile__link").contains("Ralston Crawford")
	// })

	it("check if magnifying glass is working", () => {
		navbar.searchWithMagnifyingGlass("Ralston Crawford")
		cy.get(searchPage.searchResultItems).should("have.length.at.least", 1)
	})

	// it("some negative tests", () => {
	// 	navbar.search("<script></script>")
	// 	navbar.search("%")
	// 	navbar.search("#")
	// 	navbar.search(" ") // 1 space
	// })
})
