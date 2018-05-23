require('../nightwatch.conf.js');

module.exports = {
    'Demo test Google' : (browser) => {
        browser.url('http://www.google.be')
        .waitForElementVisible('body', 1000)
        .assert.title('Google')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'packt Joris Hermans')
        .keys(browser.Keys.ENTER)
        .pause(1000)
        .assert.title('packt Joris Hermans - Google Search')
        .assert.containsText('div#rso a:first-child',
        'Joris Hermans | PACKT Books')
        .end()
    }
};