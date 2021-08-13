module.exports = {
    before: function (browser) {
        //Declaring Global Timeout
        browser
            .globals.waitForConditionTimeout = 10000
    },
    'Does not have car insurance and triggers why question': async function (browser) {
        browser.url('https://www.thezebra.com/insurance/car/prefill/start/')
        .waitForElementVisible('form[name="prefill/start"]')
        // this is clicking the no insurance radio button
        .execute(function() {
            document.querySelector('#currently_insured-0-undefined').click()
         })
         // waiting for the next question to show
        .waitForElementVisible('div[name=reason_not_currently_insured-0]')
        // verify next correct next question text
        .assert.containsText('div[name=reason_not_currently_insured-0]', "Why aren’t you insured?")
    },
    after: function (browser) {
        browser.end();
    }
}