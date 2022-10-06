class ApiClient {
  private _baseUrl
  private _endpoint

  public get baseUrl() {
    return 'https://restful-booker.herokuapp.com'
  }

  public get endpoint() {
    return this._endpoint
  }

  public set endpoint(endpoint) {
    this._endpoint = this.baseUrl + endpoint
  }

  // Client Methods
  public getBookingIds(endpoint = '/booking') {
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
    })
  }

  public updateBooking(endpoint = '/booking/9475') {
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
        Cookie: 'token=10c8b69d47c51b5',
        Authorisation: '10c8b69d47c51b5',
      },
    }).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }

  public partialUpdateBooking(endpoint = '/booking/9475') {
    const data2 = {
      totalprice: 777,
    }
    this.endpoint = endpoint
    cy.request({
      url: this.endpoint,
      method: 'PATCH',
      body: data2,
      headers: {
        Cookie: 'token=10c8b69d47c51b5',
        Authorisation: '10c8b69d47c51b5',
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
        Cookie: 'token=10c8b69d47c51b5',
      },
    }).then(($response) => {
      expect($response.status).to.equal(201)
    })
  }
}
export default new ApiClient()
