const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    async openUrl(url) {
        await driver.get(url);
    }

    async writeText(element, text) {
        await driver.findElement(webdriver.By.css(element)).sendKeys(text);
    }

    async waitForElement(selector) {
        await driver.wait(webdriver.until.elementLocated(webdriver.By.css(selector)));
    }

    async clickOnElement(selector) {
        await driver.findElement(webdriver.By.css(selector)).click();
    }

    async quitBrowser() {
        await driver.quit();
    }
}

module.exports = BasePage;