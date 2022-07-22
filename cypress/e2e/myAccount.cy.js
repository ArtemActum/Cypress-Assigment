import {
  loginPassword,
  loginUsername,
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
    homePage.login(loginUsername, loginPassword)
    homePage.clickMyAccount()
  })

  it.only('check sections functionality', () => {
    myAccountPage.clickBuying()
    myAccountPage.clickSelling()
    myAccountPage.clickInterests()
    myAccountPage.clickSettings()
  })

  it('Go to Auction Calendar from my account page', () => {
    myAccountPage.clickBuying()
    myAccountPage.clickViewAuctionCalendarBtn()
  })

  it('should select Dollar currency from select box in setting details', () => {
    myAccountPage.clickSettings()
    myAccountPage.selectDollarCurrency()
  })

  it('Complete profile page', () => {
    myAccountPage.clickCompleteProfileBtn()
  })

  it('Add new address to address book', () => {
    myAccountPage.clickSettings()
    myAccountPage.clickEditAddressBookBtn()
    myAccountPage.clickAddNewAddressBtn()
    myAccountPage.selectCZCountryInput()
    myAccountPage.addNewAddress()
    myAccountPage.clickOkayBtn()
  })
})
