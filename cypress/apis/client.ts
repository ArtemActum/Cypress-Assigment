class ApiClient {
  private _baseUrl
  private _endpoint

  public get baseUrl() {
    return 'https://pokeapi.co'
  }

  public get endpoint() {
    return this._endpoint
  }

  public set endpoint(endpoint) {
    this._endpoint = this.baseUrl + endpoint
  }

  // Client Methods
  public getHealthCheck(endpoint = '/api/v2/pokemon/25') {
    this.endpoint = endpoint
    cy.request(this.endpoint).then(($response) => {
      expect($response.status).to.equal(200)
    })
  }
}
export default new ApiClient()
