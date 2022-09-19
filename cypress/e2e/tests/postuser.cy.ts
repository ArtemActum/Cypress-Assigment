// <reference types="Cypress" />
// const dataJson = require('../../fixtures/createuser')
import dataJson from '../../fixtures/createuser.json'
// import APIPage from '../../page-objects/pages/ApiPage'

describe('post api user tests', () => {
  //  const apiPage = new APIPage()
  //  const dataJson = new DataJson()

  // let randomText = ''
  // const testEmail = ''
  it('create user test', () => {
    // apiPage.randomEmail('a', 'e', 'a')

    // const pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    // for (let i = 0; i < 10; i++)
    //   randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
    // testEmail = randomText + '@gmail.com'

    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: dataJson.name,
        job: dataJson.job,
      },
    }).then((res) => {
      // cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body).has.property('name', dataJson.name)
      // expect(res.body.data).has.property('email', testEmail)
      expect(res.body).has.property('job', dataJson.job)
    })
  })
})
