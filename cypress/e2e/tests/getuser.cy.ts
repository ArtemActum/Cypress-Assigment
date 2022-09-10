// <reference types="Cypress" />

describe('get api user tests', () => {
  const accessToken =
    '510855a495c3ea30b8fb08df3bb3e139102e3224b6293a2a1d681588feaaf254'

  it('get users by id test', () => {
    cy.request({
      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users/3310',
      headers: {
        Authorization: 'Bearer' + accessToken,
      },
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.name).to.eq('Herbert Steuber')
    })
  })
})
