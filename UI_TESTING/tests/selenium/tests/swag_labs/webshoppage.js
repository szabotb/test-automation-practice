const expect = require('chai').expect;
const { describe, before, it, after, } = require("mocha");
const webshopPage = require("../../po/swag_labs/webshop_page");
const productPage = require("../../po/swag_labs/product_page");
const selectors = require("../../test_data/swag_labs/selectors");
const { pageLoaded } = require('../../po/swag_labs/helpers/page_load_helper');
const { urlConstants } = require('../../test_data/swag_labs/urlconstants');
const logger = require('log4js').getLogger();


describe("Basic tests for Products Page", () => {

    it("Products page should be loaded entirely", async () => {
        let loadCheck = await pageLoaded(webshopPage);
        expect(loadCheck).to.be.true;
        logger.info("Products Page has been loaded entirely");
    });

    it("Count of products should be 6", async () => {
        let products = await webshopPage.locateElements(selectors.webshopPage.products.items);
        expect(products.length).to.equal(6);
    });

    it("Page URL should be correct", async () => {
        let currentUrl = await webshopPage.getCurrentUrl()
        expect(currentUrl).to.equal(urlConstants.webshopPage)
    });

    describe("Should click on the given products given element", () => {
        let randomNumber;
        beforeEach(() => {
            randomNumber = Math.floor((Math.random() * 6) + 1);
        });

        it("Should open a random product by clicking on it's picture", async () => {
            await webshopPage.clickOnAProduct(randomNumber, selectors.webshopPage.products.picture);
            let loadCheck = await pageLoaded(productPage);
            expect(loadCheck).to.be.true;
            logger.info(`Number of product in this test was: ${randomNumber}`);
        });

        it("Should open a random product by clicking on it's title", async () => {
            await productPage.browserBack();
            let loadCheck = await pageLoaded(webshopPage);
            expect(loadCheck).to.be.true;

            await webshopPage.clickOnAProduct(randomNumber, selectors.webshopPage.products.title);
            loadCheck = await pageLoaded(productPage);
            expect(loadCheck).to.be.true;
            logger.info(`Number of product in this test was: ${randomNumber}`);
        });
    });

});
