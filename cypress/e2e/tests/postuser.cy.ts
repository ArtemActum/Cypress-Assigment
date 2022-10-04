// <reference types="Cypress" />
import DataJson from '../../fixtures/createuser.json'

describe('post api user tests', () => {
  //  const dataJson = new DataJson()

  let randomText = ''
  let testEmail = ''
  it('create user test', () => {
    const pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
    testEmail = randomText + '@gmail.com'

    cy.fixture('createuser').then((dataJson) => {
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: {
          name: dataJson.name,
          job: dataJson.job,
        },
      }).then((res) => {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name', dataJson.name)
        expect(res.body.data).has.property('email', testEmail)
        expect(res.body).has.property('job', dataJson.job)
      })
    })
  })
})
