const {Builder, By, Key, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
  let driver;

  test.before(function *() {
    driver = yield new Builder().forBrowser('chrome').build();
  });

  // You can write tests either using traditional promises.
  it('works with promises', function() {
    return driver.get('http://www.google.com/ncr')
        .then(_ =>
            driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
        .then(_ => driver.wait(until.titleIs('webdriver - Поиск в Google'), 1000));
  });

  test.after(() => driver.quit());
});
