import BasePage from '../basePage'

export default class CalendarPage extends BasePage {
  // Elements
  followedBtn =
    '.hydrated.sticky > .hydrated > .chr-filter-block.hydrated  .d-block.hydrated.mt-2  .chr-switch__control'
  learningLecturesBtn =
    '#sect_0 > [slot="content"] > :nth-child(2) > .chr-filter-block__list > :nth-child(1) > .chr-checkbox > .chr-checkbox__box'
  categorySection =
    '#accordion_1 > .chr-accordion-item__panel > .chr-action > div'
  asianArtBtn =
    '#sect_1 > [slot="content"] > .chr-filter-block__list > :nth-child(3) > .chr-checkbox > .chr-checkbox__box'
  clearAllBtn = '.chr-filter-block.hydrated  .hydrated  .chr-button__text'
  liveBtn =
    '#sect_0 > [slot="content"] > :nth-child(1) > .chr-filter-block__list > :nth-child(1) > .chr-checkbox > .chr-checkbox__box'
  locationSection =
    '#accordion_2 > .chr-accordion-item__panel > .chr-action > div'
  argentinaBtn =
    '#sect_2 > [slot="content"] > .chr-filter-block__list > :nth-child(1) > .chr-checkbox > .chr-checkbox__box'
  loginBtn =
    '.chr-button.chr-button--light.chr-button--primary.chr-button--sm > .chr-button__text'
  userInput = '#username'
  passwdInput = '#password'
  signInBtn = 'button[type="submit"]'
  locationOfLot = '.d-flex > .chr-label-s'
  augustSection = "div[role='tablist'] > button:nth-of-type(4)"
  octoberSection = "div[role='tablist'] > button:nth-of-type(5)"
  monthOfLot =
    'li:nth-of-type(1) > .hydrated .chr-heading-xs-sans > span:nth-of-type(2) > span'
  onlineBtn =
    '#sect_0 > [slot="content"] > :nth-child(1) > .chr-filter-block__list > :nth-child(2) > .chr-checkbox > .chr-checkbox__box'
  typeOfLot =
    ':nth-child(1) > chr-event-tile.hydrated > .container-fluid > .row > .chr-event-tile__details > .chr-event-tile__subtitle'
  // Page Object Methods

  open(path = '/calendar') {
    super.open(path)
  }

  loginFromCalendar(
    username = 'artemminsadyrov@seznam.cz',
    password = 'Zaqxsw111',
  ) {
    cy.get(this.loginBtn).click()
    cy.get(this.userInput).click().type(username)
    cy.get(this.passwdInput).type(password)
    cy.get(this.signInBtn).click()
  }

  clickFollowedFilter() {
    cy.get(this.followedBtn).click()
  }

  clickLearningLecturesBtn() {
    cy.get(this.learningLecturesBtn).click()
  }

  clickCategorySection() {
    cy.get(this.categorySection).click()
  }

  clickAsianArtBtn() {
    cy.get(this.asianArtBtn).click()
  }

  clickClearAllBtn() {
    cy.get(this.clearAllBtn).click()
  }

  clickLocationSection() {
    cy.get(this.locationSection).click()
  }

  clickArgentinaBtn() {
    cy.get(this.argentinaBtn).click()
  }

  clickOnlineBtn() {
    cy.get(this.onlineBtn).click()
  }

  checkLocationOfLot() {
    cy.get(this.locationOfLot).should('contain', 'Argentina')
  }

  checkMonthOfLot() {
    cy.get(this.monthOfLot).should('include.text', 'October')
  }
  clickAugustSection() {
    cy.get(this.augustSection).click()
  }

  clickOctoberSection() {
    cy.get(this.octoberSection).click()
  }

  checkTypeOfLot() {
    cy.get(this.typeOfLot).should('contain', 'Online')
  }

  clickLiveBtn() {
    cy.get(this.liveBtn).click()
  }
}
