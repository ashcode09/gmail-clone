describe('gmail', function() {
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Gmail Clone');
  });

  it('shows the app\'s title on the page', function() {
    expect(element(by.id('title')).getText()).toEqual('cloneMail');
  });

  it('shows email details on page', function() {
    expect(element(by.id('emails')).getText()).toContain('Hello dear');
    expect(element(by.id('emails')).getText()).toContain('John Doe');
  });
});