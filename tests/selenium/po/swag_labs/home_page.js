const { By } = require('selenium-webdriver');
const BasePage = require('../swag_labs/base_page');
const webdriver = require('selenium-webdriver');
const selectors = require('../../test_data/swag_labs/selectors');

class HomePage extends BasePage {
    login(username, password) {
        driver.findElement(By.css(selectors.homePage.usernameField)).sendKeys(username);
        driver.findElement(By.css(selectors.homePage.passwordField)).sendKeys(password);
        driver.findElement(By.css(selectors.homePage.submitButton)).click();
    }
}

module.exports = new HomePage();
