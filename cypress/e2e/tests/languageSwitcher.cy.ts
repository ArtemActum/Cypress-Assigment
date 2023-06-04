import HomePage from '../../page-objects/pages/homePage'

describe('Language Switcher Functionality', () => {
  const homePage = new HomePage()

  beforeEach(() => {
    homePage.open()
    // cy.visit('/').then(() => {
    //   homePage.setCookie()
    // })
  })

  it('Switch ZH language', () => {
    // homePage.switchlanguageZh()
    homePage.switchLanguageTo('zh')
  })

  it('Switch Zh-Cn language', () => {
    //  homePage.switchlanguageZhCn()
    homePage.switchLanguageTo('zh-cn')
  })

  it.only('Switch En language', () => {
    // homePage.switchlanguageEn()
    homePage.switchLanguageTo('en')
  })
})
