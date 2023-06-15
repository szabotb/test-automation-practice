const BasePage = require('../swag_labs/base_page');
const selectors = require('../../test_data/swag_labs/selectors');

class HomePage extends BasePage {

    async elementsLoaded() {
        let elementLoadSteps = [
            await this.waitForElements(selectors.homePage.usernameField),
            await this.waitForElements(selectors.homePage.passwordField),
            await this.waitForElements(selectors.homePage.submitButton)
        ];

        return Promise.all(elementLoadSteps);
    }

    async login(username, password) {
        let loginSteps = [
            await this.writeText(selectors.homePage.usernameField, username),
            await this.writeText(selectors.homePage.passwordField, password),
            await this.clickOnElement(selectors.homePage.submitButton)
        ];

        return Promise.all(loginSteps);
    }
}

module.exports = new HomePage();
