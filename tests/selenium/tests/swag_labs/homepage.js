const homepage = require('../../po/swag_labs/home_page');
const credentials = require('../../test_data/swag_labs/credentials');
const { describe, it, before, after } = require('mocha');
const selectors = require('../../test_data/swag_labs/selectors');
const logger = require('log4js').getLogger();
logger.level = "debug";


describe('Basic tests for login', () => {
    let baseURL = "https://www.saucedemo.com/";

    before(async () => {
        await homepage.goToUrl(baseURL)
        logger.info(`${baseURL} url opened successfully`);

    });

    after(async () => {
        await homepage.quitBrowser()
        logger.info("Test is finished");
    });

    it('Checking elements of Home Page', async () => {
        await homepage.elementsLoaded()
        logger.info("All necessary elements found on Home Page");
    });

    it('Logging in on Home Page', async () => {
        await homepage.login(credentials.usernames.valid, credentials.password);
        logger.info("Login was successful");
    });
});