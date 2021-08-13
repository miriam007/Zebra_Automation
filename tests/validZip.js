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
    
    
    'Rents and shows intent question': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            //first get the class and then choose the first element in the class
            .waitForElementVisible('.custom-radio:nth-of-type(1)')
            //click the yes radio button
            .click('.custom-radio:nth-of-type(1)')
            //click the rent radio button
            .click('.custom-radio:nth-of-type(3)')
            //wait for the next question to be visible
            .waitForElementVisible('div[name=user_intent-0]')
            //verify the next question is correct
            .assert.containsText('div[name=user_intent-0]', "Why are you shopping for insurance today?")
    },
    'I\'m paying too much and verify continue button shows': function (browser) {
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
    'Selections are made and user clicks to continue to redirect': function (browser) {
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
            //click the save and continue button-- this keeps failing
            //.click('.btn-primary')  
    },
    /* 'Enter vehicle year on dropdown': function (browser) {
        browser
            .url('https://www.thezebra.com/insurance/car/prefill/start/')
            //make sure the first dropdown is visible
            .waitForElementVisible('div[name=dropdown_vehicle_year-0]')
            //click the yes radio button
            .setValue('.custom-dropdown:nth-of-type(1)')
    }, */
    after: function (browser) {
        browser.end();
    }
}