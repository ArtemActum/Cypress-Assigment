import CalendarPage from '../page-objects/pages/calendarPage'
import HomePage from '../page-objects/pages/homePage'

describe('Language Switcher Functionality', () => {
  const homePage = new HomePage()
  const calendarPage = new CalendarPage()

  beforeEach(() => {
    cy.visit('/calendar').then(() => {
      homePage.setCookie()
    })
  })

  it('Followed filter - ON', () => {
    calendarPage.loginFromCalendar()
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

  it('Location filter', () => {
    calendarPage.clickLocationSection()
    calendarPage.clickArgentinaBtn()
    calendarPage.checkLocationOfLot()
  })

  it('check month of lot', () => {
    calendarPage.clickAugustSection()
    calendarPage.checkMonthOfLot()
  })

  it('check type auction of lot', () => {
    calendarPage.clickOnlineBtn()
    calendarPage.checkTypeOfLot()
  })
})
