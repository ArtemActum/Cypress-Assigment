import BasePage from '../basePage'

export default class ApiPage extends BasePage {
  requestCustom(url = '', method = '', alias = '') {
    cy.request({
      method: method,
      url: url,
    }).as(alias)
  }
}
