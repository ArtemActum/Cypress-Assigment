export default class Navbar {
  clickOnLogo() {
    cy.get('.chr-header__link-site  svg').click()
  }

  search(text) {
    cy.get('#site-search').type(`${text} {enter}`)
  }

  searchWithMagnifyingGlass(text) {
    cy.get('#site-search').type(`${text}`)
    cy.get(
      "form[role='search']  .hydrated > .chr-button.chr-button--icon.chr-button--icon-left.chr-button--lg.chr-button--light > .hydrated  .chr-icon.chr-icon--sm",
    ).click()
  }

  displaySignInButton() {
    cy.isVisible('')
  }

  clickSignIn() {
    cy.get(
      '.hydrated > .chr-button.chr-button--light.chr-button--primary.chr-button--sm',
    ).click()
  }

  clickSettings() {
    cy.contains('Settings').click()
  }

  logout() {
    cy.get(
      'chr-button[aria-label="User navigation"] > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon',
    ).click()
    cy.get(
      '.chr-user-nav__list > :nth-child(2) > .hydrated > .chr-button > .chr-button__text',
    ).click()
  }

  switchlanguageZh() {
    cy.get(
      '.chr-header__user-zone > :nth-child(2) > chr-button.hydrated > .chr-button',
    ).click()
    cy.get('#site-lang').click()
    cy.get(':nth-child(2) > .chr-dropdown-list__item').click()
    // cy.get(".div:nth-of-type(2) > a:nth-of-type(1)").click()
    cy.url().should('include', 'lang=zh')
    cy.go('back')
  }

  switchlanguageZhCn() {
    cy.get(
      '.chr-header__user-zone > :nth-child(2) > chr-button.hydrated > .chr-button',
    ).click()
    cy.get('#site-lang').click()
    cy.get(':nth-child(3) > .chr-dropdown-list__item').click()
    cy.url().should('include', 'lang=zh-cn')
    cy.go('back')
  }

  switchlanguageEn() {
    cy.get(
      '.chr-header__user-zone > :nth-child(2) > chr-button.hydrated > .chr-button',
    ).click()
    cy.get('#site-lang').click()
    cy.get(':nth-child(2) > .chr-dropdown-list__item').click()
    cy.get(
      '.chr-header__user-zone > :nth-child(2) > chr-button.hydrated > .chr-button',
    ).click()
    cy.get('#site-lang').click()
    cy.get(':nth-child(2) > .chr-dropdown-list__item').click()
    cy.url().should('include', 'sc_lang=en')
  }

  myAccount() {
    cy.get(
      'chr-button[aria-label="User navigation"] > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon',
    ).click()
    cy.get('.chr-user-nav__link').click()
  }
}
