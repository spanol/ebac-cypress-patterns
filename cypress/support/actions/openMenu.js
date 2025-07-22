Cypress.Commands.add("openMenu", (tabName) => {
  cy.get(`[href="/Tab/${tabName}"]`).click();
});
