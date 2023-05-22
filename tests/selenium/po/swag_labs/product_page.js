const selectors = require("../../test_data/swag_labs/selectors");
const BasePage = require("./base_page");

class ProductPage extends BasePage {
    async elementsLoaded() {
        let elementLoadSteps = [
        await this.waitForElements(selectors.productPage.title),
        await this.waitForElements(selectors.productPage.description),
        await this.waitForElements(selectors.productPage.picture),
        await this.waitForElements(selectors.productPage.price),
        await this.waitForElements(selectors.productPage.addToCartButton)
    ];
        return Promise.all(elementLoadSteps);
    }
}

module.exports = new ProductPage()