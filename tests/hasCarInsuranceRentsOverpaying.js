module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Has car insurance, rents, I\'m paying too much, and verify continue button shows': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            //first get the class and then choose the first element in the class
            .waitForElementVisible('.custom-radio:nth-of-type(1)')
            //click the yes radio button
            .click('.custom-radio:nth-of-type(1)')
            //click the rent radio button
            .click('.custom-radio:nth-of-type(3)')
            //click the paying too much radio button
            .click('.custom-radio:nth-of-type(1)')
            //wait for the button to show up after making final selection
            .waitForElementVisible('.btn-primary')
    },
    after: function (browser) {
        browser.end();
    }
}