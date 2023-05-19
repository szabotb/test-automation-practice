const { By, promise } = require("selenium-webdriver");
const BasePage = require("./base_page");
const selectors = require("../../test_data/swag_labs/selectors");

class ProductsPage extends BasePage {

    async elementsLoaded() {
        let productPageLoadSteps = [
        await this.waitForElements(selectors.productsPage.header.main),
        await this.waitForElements(selectors.productsPage.header.hamburgerButton),
        await this.waitForElements(selectors.productsPage.header.hamburgerButton),
        await this.waitForElements(selectors.productsPage.products.items),
        await this.waitForElements(selectors.productsPage.products.description),
        await this.waitForElements(selectors.productsPage.products.picture),
        await this.waitForElements(selectors.productsPage.products.title),
        await this.waitForElements(selectors.productsPage.products.price),
        await this.waitForElements(selectors.productsPage.products.addToCartButton)];

       return Promise.all(productPageLoadSteps);
    }
}

module.exports = new ProductsPage();