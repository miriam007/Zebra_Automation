module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Leave zipcode blank, continue, and validate error message': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            // waiting for the zipcode field to show on the page
            .waitForElementVisible('.zipcode-text-input')
            // leave zipcode field blank
            .setValue('input[name=zipcode]', '')
            // click to submit the zipcode
            .click('.form-inline-submit-button')
            // wait for error message to show
            .waitForElementVisible('.zip-error-text')
            // verify error message text
            .assert.containsText('.zip-error-text', "Your ZIP code is required.")
    }, 
    after: function (browser) {
        browser.end();
    }
}