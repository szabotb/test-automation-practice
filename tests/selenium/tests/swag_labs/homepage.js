const homepage = require('../../po/swag_labs/home_page');
const credentials = require('../../test_data/swag_labs/credentials');
const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { pageLoaded } = require('../../po/swag_labs/helpers/page_load_helper');
const logger = require('log4js').getLogger();
logger.level = "debug";


describe('Basic tests for login', () => {
    let baseURL = "https://www.saucedemo.com/";

    before(async () => {
        await homepage.openUrl(baseURL)
        logger.info(`${baseURL} url opened successfully`);
    });

    it('Checking elements of Home Page', async () => {
        let loadCheck = await pageLoaded(homepage);
        expect(loadCheck).to.be.true;
        logger.info("Home Page has been loaded entirely");
    });

    it('Logging in on Home Page', async () => {
        await homepage.login(credentials.usernames.valid, credentials.password);
        logger.info("Login was successful");
    });
});