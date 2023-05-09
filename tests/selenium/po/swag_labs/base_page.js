const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.manage().setTimeouts({ implicit: (10000) });

class BasePage {
    constructor() {
        global.driver = driver;
    }

    openUrl(url) {
        driver.get(url);
    }

    isVisible(element) {
        driver.findElement(webdriver.By.css(element)).isDisplayed()
    }

    quitBrowser(){
        driver.quit()
    }
}

module.exports = BasePage;