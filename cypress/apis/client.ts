class ApiClient {
  private _baseUrl: string
  private _endpoint: string

  public get baseUrl(): string {
    return 'https://restful-booker.herokuapp.com'
  }

  public get endpoint(): string {
    return this._endpoint
  }

  public set endpoint(endpoint: string) {
    this._endpoint = this.baseUrl + endpoint
  }

  // Client Methods
  public getBookingIds(endpoint = '/booking?lastname=Minsadyrov') {
    this.endpoint = endpoint
    cy.request(this.endpoint).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }

  public getBooking(endpoint = '/booking/4197') {
    this.endpoint = endpoint
    cy.request(this.endpoint).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }

  public healthCheck(endpoint = '/ping') {
    this.endpoint = endpoint
    cy.request(this.endpoint).then(($response) => {
      expect($response.status).to.equal(201)
    })
  }

  public createToken(endpoint = '/auth') {
    const data = {
      username: 'admin',
      password: 'password123',
    }
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'POST',
      body: data,
    }).then(($response) => {
      expect($response.status).to.equal(200)
      let token = $response.body.token
      cy.log('Your token is: ' + token)
      //expect($response.data).to.be.jsonSchema(schema.VALID_SCHEMA)
      // const token = $response.json()
      // pm.environment.set('token', token)
      // return 'token'
    })
  }

  public createBooking(endpoint = '/booking') {
    const data1 = {
      firstname: 'Artem',
      lastname: 'Minsadyrov',
      totalprice: 11111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-11-11',
        checkout: '2019-12-12',
      },
      additionalneeds: 'Lunch',
    }
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'POST',
      body: data1,
    }).then(($response) => {
      expect($response.status).to.equal(200)
      let bookId = $response.body.bookingid
      cy.log('Your Booking ID is: ' + bookId)
    })
  }

  public updateBooking(endpoint = '/booking/2688') {
    const data2 = {
      firstname: 'Artem4',
      lastname: 'Minsadyrov4',
      totalprice: 11111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-11-11',
        checkout: '2019-12-12',
      },
      additionalneeds: 'Lunch',
    }
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'PUT',
      body: data2,
      headers: {
        Cookie: 'token=3c305554f849095',
        Authorisation: '3c305554f849095',
      },
    }).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }

  public partialUpdateBooking(endpoint = '/booking/2688') {
    const data2 = {
      totalprice: 777,
    }
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'PATCH',
      body: data2,
      headers: {
        Cookie: 'token=3c305554f849095',
        Authorisation: '3c305554f849095',
      },
    }).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }

  public deleteBooking(endpoint = '/booking/4197') {
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'DELETE',
      headers: {
        Cookie: 'token=3c305554f849095',
      },
    }).then(($response) => {
      expect($response.status).to.equal(201)
    })
  }
}
export default new ApiClient()
