Cypress.Commands.add("login", (email, password) => {
  cy.openMenu("Account");
  cy.get("[data-testid='email']").type(email);
  cy.get("[data-testid='password']").type(password, { log: false });
  cy.get('[data-testid="btnLogin"]').click();
});
