// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.command("openMenu", "Account");
  cy.get("[data-testid='email']").type(email);
  cy.get("[data-testid='password']").type(password, { log: false });
  cy.get('[data-testid="btnLogin"]').click();
});

Cypress.Commands.add("addRandomProductToCart", () => {
  cy.command("openMenu", "Browse");
  const randomColumn = Math.floor(Math.random() * 4) + 1;
  const randomIndex = Math.floor(Math.random() * 3);
  cy.get(
    `[style="padding: 8px;"] > :nth-child(${randomColumn}) > .r-18u37iz > :nth-child(${
      randomIndex + 1
    }) > [data-testid="productDetails"]`
  ).click();
  cy.get('[data-testid="addToCart"]').click();

  cy.get(
    '[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]'
  ).click();
  //   cy.get('[data-testid="selectAddressOrContinueToPayment"]').first().click();

  cy.get('[data-testid="completeCheckout"]').first().click();
});

Cypress.Commands.add(
  "addAddress",
  (name, phone, address, city, state, zipCode) => {
    // if button is not visible, user already has an address
    cy.get('[data-testid="addNewAddress"]').click();
    cy.get(".r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz").type(
      name
    );
    cy.get(".r-1d7mnkm > :nth-child(2) > .css-175oi2r > .css-11aywtz").type(
      phone
    );
    cy.get(".r-1d7mnkm > :nth-child(3) > .css-175oi2r > .css-11aywtz").type(
      address
    );
    cy.get(".r-1d7mnkm > :nth-child(4) > .css-175oi2r > .css-11aywtz").type(
      city
    );
    cy.get(".r-1d7mnkm > :nth-child(5) > .css-175oi2r > .css-11aywtz").type(
      state
    );
    cy.get(".r-1d7mnkm > :nth-child(6) > .css-175oi2r > .css-11aywtz").type(
      zipCode
    );

    cy.get('[data-testid="save"]').click();
  }
);

Cypress.Commands.add("openMenu", (tabName) => {
  cy.get(`[href="/Tab/${tabName}"]`).click();
});

Cypress.Commands.add("openCart", () => {
  cy.get(
    '[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr'
  ).click();
});
