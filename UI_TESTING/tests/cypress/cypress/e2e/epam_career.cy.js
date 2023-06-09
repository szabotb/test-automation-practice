/// <reference types="Cypress" />
const { visitUrl, acceptCookie, } = require("../support/page_object/career_page");

describe('Epam.com Career page', () => {

    before(() => {
        visitUrl();
        acceptCookie();
    });

    it('Page load test', async () => {

    });
});