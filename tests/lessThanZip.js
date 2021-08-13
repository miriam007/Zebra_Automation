module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Enter zipcode that is less than 5 digits and validate error message': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            // waiting for the zipcode field to show on the page
            .waitForElementVisible('.zipcode-text-input')
            // enter zip less than 5 digits 
            .setValue('input[name=zipcode]', '1')
            // click to submit the zipcode
            .click('.form-inline-submit-button')
            // wait for error message to show
            .waitForElementVisible('.zip-error-text')
            // verify error message text
            .assert.containsText('.zip-error-text', "This ZIP code is invalid.")
    }, 
    after: function (browser) {
        browser.end();
    }
}