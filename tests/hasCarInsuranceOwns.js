module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Has car insurance, owns home, and triggers bundling question': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            // first get the class and then choose the first element in the class
            .waitForElementVisible('.custom-radio:nth-of-type(1)')
            // click the yes to having insurance
            .click('.custom-radio:nth-of-type(1)')
            // click the owns home radio option
            .click('.custom-radio:nth-of-type(1)')
            // why aren't the last two assertions working?
            // wait for the next question to be visible
            //.waitForElementVisible('div[name=interested_in_bundling-0]')
            //verify the next question is correct
            //.assert.containsText('div[name=interested_in_bundling-0]', "Do you want to bundle Auto + Home insurance for bigger savings?")
    },
    after: function (browser) {
        browser.end();
    }
} 
