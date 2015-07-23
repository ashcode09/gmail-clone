describe('gmail', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Gmail Clone');
  });

  it('shows the app\'s title on the page', function() {
    browser.get('http://localhost:8080');
    expect(element(by.id('title')).getText()).toEqual('cloneMail');
  });
});