const expect = require('chai').expect;
const { describe, before, it, after, } = require("mocha");
const webshopPage = require("../../po/swag_labs/webshop_page");
const productPage = require("../../po/swag_labs/product_page");
const selectors = require("../../test_data/swag_labs/selectors");
const { pageLoaded } = require('../../po/swag_labs/helpers/page_load_helper');
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
    describe("Should click on the given products given element", () => {

        //TODO: Make the number of products random

        it("Should open product number 3 by clicking on it's picture", async () => {
            await webshopPage.clickOnAProduct(3, selectors.webshopPage.products.picture);
            let loadCheck = await pageLoaded(productPage);
            expect(loadCheck).to.be.true;
        });

        it("Should open product number 6 by clicking on it's title", async ()=> {
            await productPage.browserBack()
            await webshopPage.clickOnAProduct(6, selectors.webshopPage.products.title);
            let loadCheck = await pageLoaded(productPage);
            expect(loadCheck).to.be.true;
        })
    });

    after(async () => {
        await webshopPage.quitBrowser();
    });

});
