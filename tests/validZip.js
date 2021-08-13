module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Enter valid zipcode, continue, and validate site redirection': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            // waiting for the zipcode field to show on the page
            .waitForElementVisible('.zipcode-text-input')
            // entering a valid zipcode
            .setValue('input[name=zipcode]', '78704')
            // click to submit the zipcode
            .click('.form-inline-submit-button')
            // user should be redirected to this url
            .assert.urlEquals('https://www.thezebra.com/insurance/car/prefill/start/')
    },
    after: function (browser) {
        browser.end();
    }
}