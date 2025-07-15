const { homePage } = require("../support/pages/home.page");
const { profilePage } = require("../support/pages/profile.page");
import loginPage from "../support/pages/login.page";
const user = require("../fixtures/user.json");

describe("Teste de autenticação", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  it("Deve autenticar o usuário", () => {
    homePage.openMenu("Account");
    loginPage.login(user.email, user.password);
    homePage.openMenu("Account");

    profilePage.customerName().should("contain", user.name);
    profilePage.customerPhone().should("contain", user.phone);
    profilePage.customerEmail().should("contain", user.email);
  });
});
