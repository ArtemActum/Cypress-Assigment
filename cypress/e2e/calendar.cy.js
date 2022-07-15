import CalendarPage from '../page-objects/pages/calendarPage'
import HomePage from '../page-objects/pages/homePage'
import { login_password, login_username } from '/config'

describe('Language Switcher Functionality', () => {
  const homePage = new HomePage()
  const calendarPage = new CalendarPage()

  beforeEach(() => {
    cy.visit('/calendar').then(() => {
      homePage.setCookie()
    })
  })

  it('Followed filter - ON', () => {
    calendarPage.loginFromCalendar(login_username, login_password)
    cy.get(calendarPage.followedBtn).click()
    cy.url().should('include', 'event_following')
  })

  it('check filter', () => {
    cy.get(calendarPage.learningLecturesBtn).click()
    cy.get(calendarPage.categorySection).click()
    cy.get(calendarPage.asianArtBtn).click()
    cy.url().should('include', '|event_following|event_4|category_5|')
  })

  it('Filter - clear all', () => {
    cy.get(calendarPage.liveBtn).click()
    cy.get(calendarPage.learningLecturesBtn).click()
    cy.get(calendarPage.categorySection).click()
    cy.get(calendarPage.asianArtBtn).click()
    cy.url().should('include', '|event_live|event_4|category_5|')
    cy.get(calendarPage.clearAllBtn).click()
    cy.url().should('not.include', '|event_live|event_4|category_5|')
  })

  it('Location filter', () => {
    cy.get(calendarPage.locationSection).click()
    cy.get(calendarPage.argentinaBtn).click()
    cy.get(calendarPage.locationOfLot)
      .contains('Argentina')
      .should('contain', 'Argentina')
  })

  it('check month of lot', () => {
    cy.get(calendarPage.augustSection).click()
    cy.get(calendarPage.monthOfLot).should('include.text', 'August')
  })

  it('check Clear all button', () => {
    cy.get(calendarPage.clearAllBtn).should('be.visible')
  })

  it('check type auction of lot', () => {
    cy.get(calendarPage.onlineBtn).click()
    cy.get(calendarPage.monthOfLot).should('include.text', 'Online auction')
  })
})
