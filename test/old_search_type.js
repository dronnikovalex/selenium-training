var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('First practice test', function() {
  let driver;

  test.before(function() {
    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
  });

  test.it('new test', function() {
    driver.get('https://www.yandex.ru');

  });
	
  test.after(function() {
    driver.quit();
  });
  
});
