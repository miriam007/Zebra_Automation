module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Has car insurance and triggers residence question': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            // first get the class of radio buttons
            .waitForElementVisible('.custom-radio:nth-of-type(1)')
            // select yes radio choice
            .click('.custom-radio:nth-of-type(1)')
            // wait for the next question to be visible
            .waitForElementVisible('div[name=residence_ownership-0]')
            // verify question text
            .assert.containsText('div[name=residence_ownership-0]', "Do you own or rent your home?")
    },
    after: function (browser) {
        browser.end();
    }
}