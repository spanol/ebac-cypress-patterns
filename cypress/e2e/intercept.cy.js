const { homePage } = require("../support/pages/home.page");
const user = require("../fixtures/user.json");

describe("Teste de checkout", () => {
  before(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  beforeEach(() => {
    cy.login(user.email, user.password);
  });

  it("Deve percorrer o fluxo de pesquisa e seleção e checkout de produtos", () => {
    cy.intercept("GET", "**/public/getCategories", {
      fixture: "categories.json",
    }).as("getCategories");

    cy.intercept("GET", "/public/getProducts**", {
      fixture: "products.json",
    }).as("getProducts");

    homePage.openSearchProduct();
    homePage.openCategoriesFilter();
    homePage.categories().should("have.length.greaterThan", 1);
    homePage.selectCategory();

    cy.addFirstProductToCart();
    cy.finishCheckout();
  });
});
