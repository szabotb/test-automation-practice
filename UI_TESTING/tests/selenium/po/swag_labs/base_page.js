const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();

class BasePage {
    constructor() {
        global.driver = driver;
    }

    async openUrl(url) {
        await driver.get(url);
    }

    async locateElement(selector) {
        return await driver.findElement(webdriver.By.css(selector));
    }

    async locateElements(selector) {
        return await driver.findElements(webdriver.By.css(selector));
    }

    async writeText(element, text) {
        return await driver.findElement(webdriver.By.css(element)).sendKeys(text);
    }

    async waitForElements(selector) {
        return await driver.wait(webdriver.until.elementLocated(webdriver.By.css(selector)));
    }

    async clickOnElement(selector) {
        return await driver.findElement(webdriver.By.css(selector)).click();
    }

    async browserBack() {
        return await driver.navigate().back()
    }

    async getCurrentUrl () {
        return await driver.getCurrentUrl()
    }

    async quitBrowser() {
        await driver.quit();
    }
}

module.exports = BasePage;