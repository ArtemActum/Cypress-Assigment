describe("Login test", () => {
  before(function () {
    cy.visit(url);
  });
  it("should try to login with invalid credentials", () => {
    LoginPage.login("invalid username", "invalid password");
  });

  it("should display error message", () => {
    LoginPage.displayErrorMessage();
  });
});
