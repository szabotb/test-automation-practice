const homepage = require('../../po/swag_labs/home_page');
const credentials = require('../../test_data/swag_labs/credentials');
const { describe, it, before, after } = require('mocha');
const selectors = require('../../test_data/swag_labs/selectors');
const logger = require('log4js').getLogger();
logger.level = "debug";


describe('Basic tests for login', () => {
    let baseURL = "https://www.saucedemo.com/";

    before(() => {
        try {
            homepage.openUrl(baseURL);
            logger.info(`${baseURL} url opened successfully`);
        } catch (error) {
            logger.error(error);
        }
    });

    after(()=>{
        homepage.quitBrowser();
        logger.info("Test is finished");
    })

    it('Checking elements of Home Page', () => {
        try {
            homepage.isVisible(selectors.homePage.usernameField);
            homepage.isVisible(selectors.homePage.passwordField);
            homepage.isVisible(selectors.homePage.submitButton);
            logger.info("All necessary elements found on Home Page");

        } catch (error) {
            logger.error(error);
        }
    });

    it('Logging in on Home Page', ()=>{
        try {
            homepage.login(credentials.usernames.valid, credentials.password)
            logger.info("Login was successful")
        } catch (error) {
            logger.error(error);
        }
    })
});