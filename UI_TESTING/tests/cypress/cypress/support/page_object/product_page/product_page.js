const BasePage = require("../base_page/base_page");

class ProductPage extends BasePage {

    productPageLoaded() {
        cy.getProductPageSelector("breadcrumb").should("be.visible");
        cy.getProductPageSelector("productTitle").should("be.visible");
        cy.getProductPageSelector("productImage").should("be.visible");
        cy.getProductPageSelector("productPrice").should("be.visible");
        cy.getProductPageSelector("shippingInfo").should("be.visible");
        cy.getProductPageSelector("addToCartButton").should("be.visible");
    }

    modifyQuantity(quantity) {

        cy.getProductPageSelector("quantityInput").clear().type(quantity);
    }

    addToCart() {
        cy.getProductPageSelector("addToCartButton").click('center');
    }
}

module.exports = new ProductPage();