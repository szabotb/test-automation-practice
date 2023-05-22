const expect = require('chai').expect;
const { describe, before, it, after, } = require("mocha");
const productsPage = require("../../po/swag_labs/products_page");
const selectors = require("../../test_data/swag_labs/selectors");
const { pageLoaded } = require('../../po/swag_labs/helpers/page_load_helper');
const logger = require('log4js').getLogger();

describe("Basic tests for Products Page", () => {

    it("Products page should be loaded entirely", async () => {
        let loadCheck = await pageLoaded(productsPage);
        expect(loadCheck).to.be.true;
        logger.info("Products Page has been loaded entirely");
    });

    it("Count of products should be 6", async () => {
        let products = await productsPage.locateElements(selectors.productsPage.products.items);
        expect(products.length).to.equal(6);
    });

    after(async () => {
        await productsPage.quitBrowser();
    });

});
