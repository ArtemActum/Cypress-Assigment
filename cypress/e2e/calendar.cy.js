import CalendarPage from '../page-objects/pages/calendarPage'
import HomePage from '../page-objects/pages/homePage'
import { loginPassword, loginUsername } from '/config'

describe('Language Switcher Functionality', () => {
  const homePage = new HomePage()
  const calendarPage = new CalendarPage()

  beforeEach(() => {
    cy.visit('/calendar').then(() => {
      homePage.setCookie()
    })
  })

  it('Followed filter - ON', () => {
    calendarPage.loginFromCalendar(loginUsername, loginPassword)
    calendarPage.clickFollowedFilter()
    cy.url().should('include', 'event_following')
  })

  it('check filter', () => {
    calendarPage.clickLearningLecturesBtn()
    calendarPage.clickCategorySection()
    calendarPage.clickAsianArtBtn()
    cy.url().should('include', '|event_following|event_4|category_5|')
  })

  it('Filter - clear all', () => {
    cy.get(calendarPage.liveBtn).click()
    calendarPage.clickLearningLecturesBtn()
    calendarPage.clickCategorySection()
    calendarPage.clickAsianArtBtn()
    cy.url().should('include', '|event_live|event_4|category_5|')
    calendarPage.clickClearAllBtn()
    cy.url().should('not.include', '|event_live|event_4|category_5|')
  })

  it.only('Location filter', () => {
    calendarPage.clickLocationSection()
    calendarPage.clickArgentinaBtn()
    cy.get(calendarPage.locationOfLot).should('contain', 'Argentina')
  })

  it('check month of lot', () => {
    cy.get(calendarPage.augustSection).click()
    cy.get(calendarPage.monthOfLot).should('include.text', 'August')
  })

  it('check Clear all button', () => {
    cy.get(calendarPage.clearAllBtn).should('be.visible')
  })

  it('check type auction of lot', () => {
    calendarPage.clickOnlineBtn()
    cy.get(calendarPage.monthOfLot).should('include.text', 'Online auction')
  })
})
