module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Has car insurance, condo, and triggers intent question': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            // first get the class and then choose the first element in the class
            .waitForElementVisible('.custom-radio:nth-of-type(1)')
            // click the yes to having insurance
            .click('.custom-radio:nth-of-type(1)')
            // click the condo radio option
            .click('.custom-radio:nth-of-type(2)')
            // wait for the next question to be visible
            .waitForElementVisible('div[name=user_intent-0]')
            // verify the next question is correct
            .assert.containsText('div[name=user_intent-0]', "Why are you shopping for insurance today?")
    },
    after: function (browser) {
        browser.end();
    }
}