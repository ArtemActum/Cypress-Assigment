import { login_password, login_username } from '/config'
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

  //   it('check sections functionality', () => {
  //     myAccountPage.clickBuying()
  //     cy.url().should('include', 'ua&submenuTapped')
  //     myAccountPage.clickSelling()
  //     cy.url().should('include', 'active&submenuTapped')
  //     myAccountPage.clickInterests()
  //     cy.url().should('include', 'pc&submenuTapped')
  //     myAccountPage.clickSettings()
  //     cy.url().should('include', 'as&submenuTapped')
  //   })

  //   it('add new address to address book', () => {
  //     myAccountPage.clickBuying()
  //     cy.url().should('include', 'ua&submenuTapped')
  //   })

  //   it('Receive email alerts', () => {
  //     myAccountPage.clickSettings()
  //     cy.get(myAccountPage.commPreferBtn).click()
  //     cy.get(myAccountPage.receiveEmailAlerts).click()
  //     //const yesSelector = myAccountPage.yesSelector('background-color')
  //     //expect(myAccountPage.yesSelector).to.have.style('background-color', '#222')
  //     // myAccountPage.yesSelector.style.color = '#222'
  //     // expect(myAccountPage.yesSelector).to.have.style('color', 'black')
  //     // expect(
  //     //   myAccountPage.yesSelector.getCssProperty('background-color').value,
  //     // ).to.be.equal('#222')
  //   })

  it('Switch off email alerts', () => {
    myAccountPage.clickSettings()
    cy.get(myAccountPage.commPreferBtn).click()
    cy.get(myAccountPage.noneSelector).click()
  })
})
