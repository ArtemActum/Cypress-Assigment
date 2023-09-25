//<reference types="Cypress" />
import APIPage from '../../page-objects/pages/ApiPage'
import ApiClient from '../../apis/client'

describe('REST API Test with Cypress', () => {
  const apiPage = new APIPage()

  it('API TESTs', () => {
    ApiClient.createToken()
    ApiClient.healthCheck()
    ApiClient.createBooking()
    ApiClient.getBookingIds()
    ApiClient.getBooking()
    ApiClient.updateBooking()
    ApiClient.partialUpdateBooking()
    ApiClient.deleteBooking()
  })

  it('API TEST - Validate Header, Status Code and Name Value', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon') //  Make an HTTP request.
    cy.get('@pokemon')
      .its('headers') //  calls 'headers' property returning that value
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
    cy.get('@pokemon').its('status').should('equal', 200)
    cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
  })

  it('API TEST - APIMethod', () => {
    apiPage.requestCustom(
      'https://pokeapi.co/api/v2/pokemon/25',
      'Get',
      'pokemon',
    )
    cy.get('@pokemon')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
    cy.get('@pokemon').its('status').should('equal', 200)
    cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
  })

  // it('API TEST - Validate Negative Status Code', () => {
  //   cy.request({
  //     method: 'GET',
  //     url: 'https://pokeapi.co/api/v2/pokemon/1000',
  //     failOnStatusCode: false,
  //   }).as('pokemon')
  //   cy.get('@pokemon').its('status').should('equal', 404)
  // })

  it('API TEST - POST restful-booker', () => {
    apiPage.requestCustom(
      'https://restful-booker.herokuapp.com/auth',
      'Post',
      'requestPost',
    )
    cy.get('@requestPost').its('status').should('equal', 200)
  })
})
