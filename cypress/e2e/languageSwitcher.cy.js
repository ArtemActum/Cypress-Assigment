import BasePage from "../page-objects/basePage"
import Navbar from "../page-objects/components/navbar"
import LoginPage from "../page-objects/pages/loginPage"
import { url, login_password, login_username } from "/config"

describe("Language Switcher Functionality", () => {
	const loginPage = new LoginPage()
	const navbar = new Navbar()
	const basePage = new BasePage()

    beforeEach(() => {
        cy.visit(url).then(() => {
          basePage.setCookie()
        })
      })

	it("Switch ZH language", () => {
		navbar.switchlanguageZh()
	})

	it("Switch Zh-Cn language", () => {
		navbar.switchlanguageZhCn()
	})

	it("Switch En language", () => {
		navbar.switchlanguageEn()
	})
})
