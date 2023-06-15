const BasePage = require("./base_page");
const selectors = require("../../test_data/swag_labs/selectors");
const { By } = require("selenium-webdriver");

class WebshopPage extends BasePage {

    async elementsLoaded() {
        let productPageLoadSteps = [
            await this.waitForElements(selectors.webshopPage.header.main),
            await this.waitForElements(selectors.webshopPage.header.hamburgerButton),
            await this.waitForElements(selectors.webshopPage.header.hamburgerButton),
            await this.waitForElements(selectors.webshopPage.products.items),
            await this.waitForElements(selectors.webshopPage.products.description),
            await this.waitForElements(selectors.webshopPage.products.picture),
            await this.waitForElements(selectors.webshopPage.products.title),
            await this.waitForElements(selectors.webshopPage.products.price),
            await this.waitForElements(selectors.webshopPage.products.addToCartButton)
        ];
        
        return Promise.all(productPageLoadSteps);
    }

    async clickOnAProduct(numberOfProduct, whereToClickSelector) {
        return (await this.locateElement(selectors.webshopPage.products.items + `:nth-of-type(${numberOfProduct})`)).findElement(By.css(whereToClickSelector)).click();
    }
}

module.exports = new WebshopPage();