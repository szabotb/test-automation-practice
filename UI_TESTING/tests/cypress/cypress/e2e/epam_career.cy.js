/// <reference types="Cypress" />
const { visitUrl, acceptCookie, pageLoaded, } = require("../support/page_object/career_page");

describe('Epam.com Career page', () => {

    before(() => {
        visitUrl();
        cy.viewport(1280, 720)
        acceptCookie();
    });

    it('Career page should load', async () => {
        pageLoaded();
    });

    it('Carrer search should work properly', () => {
        cy.get("[id='new_form_job_search-location']").click()
        cy.get("[class='select2-results']").should("be.visible")
        cy.get("[aria-label='Germany']").should("be.visible")
        cy.get("[aria-label='Germany']").click()
        cy.get("[aria-label='Germany'] ul li").its("length").should("equal", 10)
    });
});