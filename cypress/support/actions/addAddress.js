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
