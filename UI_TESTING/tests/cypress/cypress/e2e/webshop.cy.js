/// <reference types="Cypress" />
const { visitUrl, openWebshop, acceptCookie, basePageLoaded, webshopPageLoaded, searchForItem } = require("../support/page_object/webshop_page");

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
    });
});