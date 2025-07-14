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
  cy.openMenu("Account");
  cy.get("[data-testid='email']").type(email);
  cy.get("[data-testid='password']").type(password, { log: false });
  cy.get('[data-testid="btnLogin"]').click();
});

Cypress.Commands.add("addRandomProductToCart", () => {
  cy.openMenu("Browse");

  const getRandomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const randomColumn = getRandomBetween(1, 2);
  const randomIndex = getRandomBetween(1, 2);

  cy.get(
    `[style="padding: 8px;"] > :nth-child(${randomColumn}) > .r-18u37iz > :nth-child(${randomIndex}) > [data-testid="productDetails"]`
  ).click();
  cy.get('[data-testid="addToCart"]').click();

  cy.get(
    '[style="z-index: 0; display: flex;"] > [style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(3) > [data-testid="selectAddressOrContinueToPayment"]'
  ).click();

  cy.get('[data-testid="completeCheckout"]').first().click();
});

Cypress.Commands.add("addFirstProductToCart", () => {
  cy.get(
    '[style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 445px;"] > [data-testid="productDetails"]'
  ).click();
  cy.get("[data-testid='addToCart']").click();
});

Cypress.Commands.add("finishCheckout", () => {
  cy.get('[data-testid="selectAddressOrContinueToPayment"]').click();
  cy.get('[data-testid="completeCheckout"]').first().click();
});

Cypress.Commands.add(
  "addAddress",
  (name, phone, address, city, state, zipCode) => {
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
