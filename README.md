Gmail Clone
===========

Writing a Gmail clone in javascript.

Instructions
------------
Navigate into a folder you want to download this clone into and do the following:

```
$ git clone https://github.com/ashleigh090990/gmail-clone
$ cd gmail-clone
```

To play around with the page, while in the gmail-clone, run Selenium Webdriver:
```
$ webdriver-manager start
```
Open another tab in the terminal, also in the gmail-clone directory, run HTTP-Server:
```
$ http-server
```
And visit ```http://localhost:8080``` in your browser.




Tests
-----
Feature tested with Selenium and Protractor

To run the protractor tests, keep Selenium Webdriver and HTTP-Server running and open a separate tab in the gmail-clone directory to run:
```
$ protractor spec/conf.js
```




Unit tested with Jasmine and Karma (get working with Travis)


Look up how to get Coveralls working with Javascript, and also Travis with JS too