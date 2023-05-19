const expect = require('chai').expect;
const { describe, before, it, after, } = require("mocha");
const productsPage = require("../../po/swag_labs/products_page");
const selectors = require("../../test_data/swag_labs/selectors");
const { Driver } = require('selenium-webdriver/chrome');
const { By } = require('selenium-webdriver');
const elements = require('../../test_data/swag_labs/elements');
const logger = require('log4js').getLogger();

describe("Basic tests for Products Page", () => {

    it("Products page should be loaded entirely", async () => {
        let necessaryElements = await productsPage.elementsLoaded();
        necessaryElements = await Promise.all(necessaryElements.map(async (element) => await element.isDisplayed()))
    
        let isAllVisible = necessaryElements.every((value) => value === true)
        expect(isAllVisible).to.be.true
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
