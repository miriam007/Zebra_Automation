module.exports = {
    before: function (browser) {
        // Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 7000
    },
    'Verify headline': function (browser) {
        browser
            .url('https://www.thezebra.com/')
            // wait for headline to show
            .waitForElementVisible('.hero-headline')
            // verify headline text
            .assert.containsText('.hero-headline', "Pairing people with policies")
    },
    'Verify subheadline': function (browser) {
        browser
            // wait for subheadline to show
            .waitForElementVisible('.hero-subheadline')
            // verify subheadline text
            .assert.containsText('.hero-subheadline', "Compare personalized quotes from top car and home insurance providers in minutes.")
    },
    'Verify body features headlines': function (browser) {
        browser
            // wait for body feature headlines to show
            .waitForElementVisible('.body-features-headline')
            // verify all three body headlines text
            .assert.containsText('.body-features-headline', "One marketplace for every major provider", "Find a match and save hundreds every year", "We've got you covered")
    },
    'Verify body features subheadlines': function (browser) {
        browser
            // wait for body feature subheadlines to show
            .waitForElementVisible('.body-features-subheadline')
            // verify all three body subheadlines text
            .assert.containsText('.body-features-subheadline', "No need to shop around. Review every major provider side-by-side in one place.", "Whether you're looking to save on a car or home policy, we find the best value for you.", "Our licensed agents are always standing by to help you as your needs change.")
    },
    'Verify FAQ headline': function (browser) {
        browser
            // wait for FAQ headline to show
            .waitForElementVisible('.faq-headline')
            // verify FAQ headline text
            .assert.containsText('.faq-headline', "Frequently asked questions")
    },
    'Verify car calc headline': function (browser) {
        browser
            // wait for car calc headline to show
            .waitForElementVisible('.car-calc-headline')
            // verify car calc headline text
            .assert.containsText('.car-calc-headline', "Get a quick estimate")
    },
    'Verify feature body': function (browser) {
        browser
            // wait for feature body to show
            .waitForElementVisible('.feature-body')
            // verify feature body text
            .assert.containsText('.feature-body', "Not ready to buy a policy? Run your numbers on our car insurance calculator to estimate how much your policy will cost.")
    },
    after: function (browser) {
        browser.end();
    }
}