/// <reference types="Cypress" />
const { visitUrl, pageLoaded, openJobs, } = require("../support/page_object/career_page");

describe('Epam.com Career page', () => {

    before(() => {
        visitUrl();
        cy.viewport(1280, 720)
        openJobs()
    });

    it('Career page should load', async () => {
        pageLoaded()
    });

    it('Carrer search should work properly', () => {
        cy.get("div#ms-list-1 button").click()
    });
});