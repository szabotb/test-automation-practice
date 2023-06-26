const BasePage = require("./base_page");

class ProductPage extends BasePage {

    productPageLoaded() {
        cy.get("[class='woocommerce-breadcrumb']").should("be.visible");
        cy.get("[class='summary entry-summary'] [class='product_title entry-title']").should("be.visible");
        cy.get("[class*='woocommerce-product-gallery images'] img").should("be.visible");
        cy.get("p[class='price'] bdi").should("be.visible");
        cy.get("[class='summary entry-summary'] [class='custom_stock_text']").should("be.visible");
        cy.get("[name='add-to-cart']").should("be.visible");
    }

    modifyQuantity(quantity) {

        cy.get("[class='summary entry-summary'] input[name='quantity']").clear().type(quantity)
    }

    addToCart() {
        cy.get("[name='add-to-cart']").click('center')
    }
}

module.exports = new ProductPage()