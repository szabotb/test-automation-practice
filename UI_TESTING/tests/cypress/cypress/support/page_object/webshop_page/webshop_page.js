/// <reference types="Cypress" />

const BasePage = require("../base_page/base_page");

class WebshopPage extends BasePage {
    webshopPageLoaded() {
        cy.get("[class='storefront-primary-navigation']").should("be.visible");
        cy.get("[class='smart-cart-opener']").should("be.visible");
        cy.get("[title='Kedvencek']").should("be.visible");
        cy.get("h2[class='section-title']").contains('Legújabb termékeink').should("be.visible");
        cy.get("[class='featured-categories']").should("be.visible");
        cy.get("h2[class='section-title']").contains('Legnépszerűbb termékeink').should("be.visible");
    }

    searchForItem(item) {
        cy.get("[class='search-field']").type(item);
        cy.get("[class='df-classic']").should("be.visible");
    }
}

module.exports = new WebshopPage();