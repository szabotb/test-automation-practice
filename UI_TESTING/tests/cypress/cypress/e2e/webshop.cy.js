/// <reference types="Cypress" />
const { productPageLoaded, modifyQuantity, addToCart } = require("../support/page_object/product_page/product_page");
const { webshopPageLoaded, searchForItem, openWebshop } = require("../support/page_object/webshop_page/webshop_page");

describe('Fressnapf Webshop', () => {

    it('Webshop page should load', () => {
        openWebshop();
        cy.url().should('include', 'webshop');
        webshopPageLoaded();
    });

    describe('Search in webshop', () => {
        const randomNumber = Math.floor((Math.random() * 29));

        it('Search should work and the url should reflect the search', () => {
            cy.readFile("cypress/support/test_data/search_terms.json").its("searchterm").then($searchterm => {
                searchForItem($searchterm);
                cy.url().as('searchUrl');
                cy.url().should('include', $searchterm);
            });
        });

        it('The searchterm should be part of every item title', () => {
            cy.readFile("cypress/support/test_data/search_terms.json").its("searchterm").then(() => {
                cy.get("[class='df-card']").each(($resultTitle) => {
                    expect($resultTitle.text()).to.match(/kapar(o{1}|ó)f(a{1}|á{1})/);
                });
            });
        });

        it('Opening a random element and checking its properties', () => {
            cy.get("[class='df-card']").should('have.length', 30);
            cy.get("[class='df-card']").eq(randomNumber).click();

            productPageLoaded();
        });

        describe('Quantity input in Product Page', () => {

            it('Positive Cases', () => {
                cy.get("[class='summary entry-summary'] input[name='quantity']").as("quantInput");
                cy.get("@quantInput").then($quantInput => {
                    if ($quantInput.is(':visible')) {
                        cy.readFile("cypress/support/test_data/quantities.json").its("positiveCases").then(($quantity) => {
                            $quantity.map((value) => {
                                modifyQuantity(value);
                                addToCart();
                                cy.get("[class='popup-cart-content animated bounceInRight']").should('be.visible');
                                cy.get("[class='cart-prd-row  simple']").should("be.visible");
                                cy.get("[class='wsc-button float-left']").should("be.visible");
                                cy.get("[class='wsc-button float-right']").should("be.visible");
                                cy.get("[class='woocommerce-smart-cart-remove-cart-item']").click();
                                cy.get("[class='close-popup-cart']").click();
                                cy.get("[class='popup-cart-content animated bounceInRight']").should('not.be.visible');
                                productPageLoaded();

                                cy.readFile("cypress/support/test_data/search_terms.json").its("searchterm").then($searchterm => {
                                    searchForItem($searchterm);
                                    cy.url().as('searchUrl');
                                    cy.url().should('include', $searchterm);
                                });
                            });
                        });
                    }
                    else {
                        cy.log("Quantity input is not available");
                    }
                });
            });

            it('Negative Cases', () => {
                cy.get("[class='df-card']").eq(randomNumber).click();
                cy.get("[class='summary entry-summary'] input[name='quantity']").as("quantInput");
                cy.get("@quantInput").then($quantInput => {
                    if ($quantInput.is(':visible')) {

                        cy.readFile("cypress/support/test_data/quantities.json").its("negativeCases").then(($quantity) => {
                            $quantity.map((value) => {
                                modifyQuantity(value);
                                addToCart();
                                cy.get("[class='popup-cart-content animated bounceInRight']").should('be.visible');
                                cy.get("p[class='text-center']").contains('A kosarad jelenleg üres.').should("be.visible");
                                cy.get("[class='close-popup-cart']").click();

                            });
                        });
                    }
                    else {
                        cy.log("Quantity input is not available");
                    }
                });
                //Tests fail because the quantity input takes invalid numbers as well and increases the quantity in the cart
            });
        });
    });
});