class LoginPage {
  get #email() {
    return cy.get('[data-testid="email"]');
  }

  get #password() {
    return cy.get('[data-testid="password"]');
  }

  get #loginButton() {
    return cy.get('[data-testid="btnLogin"]');
  }

  login(email, password) {
    this.#email.clear().type(email);
    this.#password.clear().type(password);
    this.#loginButton.click();
  }
}

module.exports = new LoginPage();
