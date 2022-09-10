// <reference types="Cypress" />
// const dataJson = require('../../fixtures/createuser')
import dataJson from '../../fixtures/createuser.json'
import APIPage from '../../page-objects/pages/ApiPage'

describe('post api user tests', () => {
  const apiPage = new APIPage()

  const accessToken =
    '510855a495c3ea30b8fb08df3bb3e139102e3224b6293a2a1d681588feaaf254'

  let randomText = ''
  let testEmail = ''
  it('create user test', () => {
    // apiPage.randomEmail()

    const pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
    testEmail = randomText + '@gmail.com'

    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer' + accessToken,
      },
      body: {
        name: dataJson.name,
        email: testEmail,
        gender: dataJson.gender,
        status: dataJson.status,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body.data).has.property('name', dataJson.name)
      expect(res.body.data).has.property('email', testEmail)
      expect(res.body.data).has.property('gender', dataJson.gender)
      expect(res.body.data).has.property('status', dataJson.status)
    })
  })
})
