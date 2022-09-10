import BasePage from '../basePage'

export default class CalendarPage extends BasePage {   
  randomEmail() {
    let randomText = ''
    let testEmail = ''
    const pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < 10; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
    testEmail = randomText + '@gmail.com'
  }

  // private fillInAddressFields(
  //   country: string,
  //   countryValue: string,
  //   street: string,
  //   city: string,
  //   postCode: string,
  // ) {
  //   // Fill in all required fields with default or provided values.
  //   this.countrySelect().select(country).should('have.value', countryValue)
  //   this.streetInput().type(street).should('have.value', street)
  //   this.cityInput().type(city).should('have.value', city)
  //   this.postCodeInput().type(postCode).should('have.value', postCode)
  // }

}
