const user = require("../fixtures/user.json");
const address = require("../fixtures/address.json");

describe("Teste de checkout", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  it("Deve criar um novo endereço e efetuar uma compra", () => {
    cy.command("login", user.email, user.password);
    cy.command("openCart");
    cy.command(
      "addAddress",
      address.name,
      address.phone,
      address.address,
      address.city,
      address.state,
      address.zipCode
    );
    cy.command("addRandomProductToCart");
  });

  it("Deve efetuar uma compra com um endereço existente", () => {
    cy.command("login", user.email, user.password);
    cy.command("openCart");
    cy.command("addRandomProductToCart");
  });
});
