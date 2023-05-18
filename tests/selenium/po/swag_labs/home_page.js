const { By } = require('selenium-webdriver');
const BasePage = require('../swag_labs/base_page');
const selectors = require('../../test_data/swag_labs/selectors');

class HomePage extends BasePage {

    async goToUrl(url) {
        await this.openUrl(url);
    }

    async elementsLoaded() {
        await this.waitForElement(selectors.homePage.usernameField);
        await this.waitForElement(selectors.homePage.passwordField);
        await this.waitForElement(selectors.homePage.submitButton);
    }

    async login(username, password) {
        await this.writeText(selectors.homePage.usernameField, username);
        await this.writeText(selectors.homePage.passwordField, password);
        await this.clickOnElement(selectors.homePage.submitButton);
    }
}

module.exports = new HomePage();
