const { homePage } = require("../support/pages/home.page");
const { profilePage } = require("../support/pages/profile.page");
import loginPage from "../support/pages/login.page";
const data = require("../fixtures/data.json");

describe("Teste de autenticação", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  it("Deve autenticar o usuário", () => {
    homePage.openMenu("Account");
    loginPage.login(data.email, data.password);
    homePage.openMenu("Account");

    profilePage.customerName().should("contain", data.name);
    profilePage.customerPhone().should("contain", data.phone);
    profilePage.customerEmail().should("contain", data.email);
  });
});
