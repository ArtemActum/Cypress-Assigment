// <reference types="Cypress" />

describe('REST API Test with Cypress', () => {
  it('API TEST - Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon') //  Make an HTTP request.
    cy.get('@pokemon')
      .its('headers') //  calls 'headers' property returning that value
      .its('content-type')
      .should('include', 'application/json; charset=utf-8')
  })

  it('API TEST - Validate Status Code', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
  })

  it('API TEST - Validate Name Value', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon').its('body').should('include', { name: 'pikachu' })
  })

  it('API TEST - Validate Negative Status Code', () => {
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/1000',
      failOnStatusCode: false,
    }).as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 404)
  })

  it('API TEST - POST restful-booker', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
    }).as('CreateToken')
    cy.get('@CreateToken').its('status').should('equal', 200)
  })

  it('API TEST - GET restful-booker', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('CreateToken')
    cy.get('@CreateToken').its('status').should('equal', 200)
  })

  // it('API TEST - GET restful-booker', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: 'https://restful-booker.herokuapp.com/auth', // baseUrl is prepend to URL
  //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
  //     body: {
  //       username: 'admin',
  //       password: 'password123',
  //     },
  //   })
  // })
})
