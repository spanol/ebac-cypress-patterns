export const homePage = {
  openMenu(menu) {
    return cy.get(`[href="/Tab/${menu}"]`).click();
  },

  openSearchProduct() {
    cy.get('[data-testid="search-products"]').click();
  },

  searchProduct(productName) {
    cy.get('[data-testid="searchInput"]').type(productName);
  },

  openCategoriesFilter() {
    return cy.get('[data-testid="Category"]').click();
  },

  categories() {
    return cy.get('[data-testid^="search-category-"]');
  },

  products() {
    return cy.get(
      '[data-testid="browse-product-list"] [data-testid="productDetails"]'
    );
  },

  selectCategory(categoryName = "Roupas") {
    return cy.get(`[data-testid="search-category-${categoryName}"]`).click();
  },
};
