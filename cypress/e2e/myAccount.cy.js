import {
  login_password,
  login_username,
  city,
  address,
  postalCode,
} from '/config'
import HomePage from '../page-objects/pages/homePage'
import MyAccount from '../page-objects/pages/myAccountPage'

describe('MyAccount Functionality Tests', () => {
  const homePage = new HomePage()
  const myAccountPage = new MyAccount()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
    homePage.login(login_username, login_password)
    homePage.myAccount()
  })

      it('check sections functionality', () => {
        myAccountPage.clickBuying()
        cy.url().should('include', 'ua&submenuTapped')
        myAccountPage.clickSelling()
        cy.url().should('include', 'active&submenuTapped')
        myAccountPage.clickInterests()
        cy.url().should('include', 'pc&submenuTapped')
        myAccountPage.settingBtn()
        cy.url().should('include', 'as&submenuTapped')
      })

      it('Go to Auction Calendar from my account page', () => {
        cy.get(myAccountPage.buyingBtn).contains('Buying').click()
        cy.get(myAccountPage.viewAuctionCalendarBtn).click()
        cy.url().should('include', 'calendar')
      })

      it('should select Dollar currency from select box in setting details', () => {
        myAccountPage.clickSettings()
        cy.get(myAccountPage.currencySelector).select('U.S. Dollars')
        cy.get(myAccountPage.currencySelector).should('have.value', 'USD')
      })

      it('Complete profile page', () => {
        cy.get(myAccountPage.completeProfileBtn).click()
        cy.url().should('include', 'confirm-details')
      })

    it('Add new address to address book', () => {
      myAccountPage.clickSettings()
      cy.get(myAccountPage.editAddressBookBtn).click()
      cy.get(myAccountPage.addNewAddressBtn).click()
      cy.get(myAccountPage.countryInput).select('Czech Republic')
      cy.get(myAccountPage.countryInput).should('have.value', 'CZ|Czech Republic|57')
      myAccountPage.addNewAddress()
      cy.get(myAccountPage.okayBtn).click()
      cy.get(myAccountPage.actualAdrress).should('have.text', 'Argentinska')
    })

  it('check name of user', () => {
    cy.get(myAccountPage.nameUser)
    cy.get(myAccountPage.nameUser).then(($a) => {
      if ($a.text()) {
        cy.contains('Artem M')
        cy.log('True')
      } else {
        cy.log('False')
      }
    })
  })
})
