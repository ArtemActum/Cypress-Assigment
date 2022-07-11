import HomePage from '../page-objects/pages/homePage'

describe('Language Switcher Functionality', () => {
  const homePage = new HomePage()

  beforeEach(() => {
    cy.visit('/').then(() => {
      homePage.setCookie()
    })
  })

  it('Switch ZH language', () => {
    homePage.switchlanguageZh()
  })

  it('Switch Zh-Cn language', () => {
    homePage.switchlanguageZhCn()
  })

  it('Switch En language', () => {
    homePage.switchlanguageEn()
  })
})
