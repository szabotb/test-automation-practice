const { pageLoaded } = require("../../po/swag_labs/helpers/page_load_helper");
const homepage = require("../../po/swag_labs/home_page");
const { openUrl } = require("../../po/swag_labs/home_page");
const { quitBrowser } = require("../../po/swag_labs/webshop_page");
const credentials = require("../../test_data/swag_labs/credentials");
const { urlConstants } = require("../../test_data/swag_labs/urlconstants");

before(async () => {
    let steps = [
        await openUrl(urlConstants.baseUrl),
        await pageLoaded(homepage),
        await homepage.login(credentials.usernames.valid, credentials.password)
    ];
    return Promise.all(steps);
});

after(async () => {
    await quitBrowser();
});