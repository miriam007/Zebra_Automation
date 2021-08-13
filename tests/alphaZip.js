module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Enter alpha zipcode, continue, and validate error message': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            // waiting for the zipcode field to show on the page
            .waitForElementVisible('.zipcode-text-input')
            // enter zip with alpha characters
            .setValue('input[name=zipcode]', 'abcde')
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