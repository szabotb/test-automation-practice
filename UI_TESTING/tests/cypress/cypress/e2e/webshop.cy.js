/// <reference types="Cypress" />
const { visitUrl, openWebshop, acceptCookie, basePageLoaded, webshopPageLoaded, searchForItem } = require("../support/page_object/webshop_page");

describe('Fressnapf Webshop', () => {

    before(() => {
        visitUrl();
        cy.viewport(1280, 720)
        basePageLoaded()
        acceptCookie()
    });

    it('Webshop page should load', () => {
        openWebshop()
        cy.url().should('include', 'webshop')
        webshopPageLoaded()
    });

    it("Search should work and the url should reflect the search", ()=> {
        const term = "kaparofa"
        searchForItem(term)
        cy.url().should('include', term)
    })
});