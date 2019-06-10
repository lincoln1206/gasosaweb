module.exports = {
    'get to home page': (browser) => {
        browser
        // Load the page at the launch URL
            .url(browser.launchUrl)
            // wait for page to load
            .waitForElementVisible('.navbar', 1000)
            // click on the login link
            .click('a[href="#/home"]');

        browser.assert.urlContains('login');
    },
    'get to create page': (browser) => {
    },
    'get to index page': (browser) => {
    },
};
