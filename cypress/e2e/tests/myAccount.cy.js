import HomePage from '../../page-objects/pages/homePage'
import MyAccount from '../../page-objects/pages/myAccountPage'

describe('MyAccount Functionality Tests', () => {
  const homePage = new HomePage()
  const myAccountPage = new MyAccount()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
    homePage.login()
    homePage.clickMyAccount()
  })

  it('check sections functionality', () => {
    myAccountPage.clickBuying()
    cy.url().should('include', 'ua&submenuTapped')
    myAccountPage.clickSelling()
    cy.url().should('include', 'active&submenuTapped')
    myAccountPage.clickInterests()
    cy.url().should('include', 'pc&submenuTapped')
    myAccountPage.clickSettings()
    cy.url().should('include', 'as&submenuTapped')
  })

  it('Go to Auction Calendar from my account page', () => {
    myAccountPage.clickBuying()
    cy.url().should('include', 'ua&submenuTapped')
    myAccountPage.clickViewAuctionCalendarBtn()
    cy.url().should('include', 'calendar')
  })

  it('should select Dollar currency from select box in setting details', () => {
    myAccountPage.clickSettings()
    cy.url().should('include', 'as&submenuTapped')
    myAccountPage.selectDollarCurrency().should('have.value', 'USD')
  })

  it('Add new CZ address to address book', () => {
    myAccountPage.navigateToAddressBookForm()
    myAccountPage.addNewCZAddress()
    myAccountPage.deleteCZAddress()
  })

  it('Add new UK address to address book', () => {
    myAccountPage.navigateToAddressBookForm()
    myAccountPage.addNewUKAddress()
    myAccountPage.deleteUKAddress()
  })

  it.only('Add new USA address to address book', () => {
    myAccountPage.navigateToAddressBookForm()
    myAccountPage.addNewUSAAddress()
    myAccountPage.deleteUSAAddress()
  })
})
