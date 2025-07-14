export const homePage = {
  openMenu(menu) {
    return cy.get(`[href="/Tab/${menu}"]`).click();
  },

  openSearchProduct() {
    cy.get('[data-testid="search-products"]').click();
  },

  openCategoriesFilter() {
    return cy.get('[data-testid="Category"]').click();
  },

  categories() {
    return cy.get('[data-testid^="search-category-"]');
  },

  selectCategory(categoryName = "Roupas") {
    return cy.get(`[data-testid="search-category-${categoryName}"]`).click();
  },
};
