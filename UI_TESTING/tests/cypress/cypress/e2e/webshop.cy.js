/// <reference types="Cypress" />
const { productPageLoaded, modifyQuantity, addToCart } = require("../support/page_object/product_page");
const { openWebshop, webshopPageLoaded, searchForItem } = require("../support/page_object/webshop_page");

describe('Fressnapf Webshop', () => {

    it('Webshop page should load', () => {
        openWebshop();
        cy.url().should('include', 'webshop');
        webshopPageLoaded();
    });

    describe('Search in webshop', () => {

        it('Search should work and the url should reflect the search', () => {
            cy.readFile("cypress/support/test_data/search_terms.json").its("searchterm").then($searchterm => {
                searchForItem($searchterm);
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
            const randomNumber = Math.floor((Math.random() * 29));
            cy.get("[class='df-card']").should('have.length', 30);
            cy.get("[class='df-card']").eq(randomNumber).click();

            productPageLoaded();
        });

        describe('Quantity input in Product Page', () => {

            it('Negative Cases', () => {
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
                        return;
                    }
                });
                //Tests fail because the quantity input takes invalid numbers as well and increases the quantity in the cart
            });
        });
    });
});