'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });


  describe('login', function() {

    beforeEach(function() {
      browser.get('index.html#!/login');
    });


    it('should render view1 when user navigates to /login', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for login/);
    });

  });


  describe('logout', function() {

    beforeEach(function() {
      browser.get('index.html#!/logout');
    });


    it('should render logout when user navigates to /logout', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for logout/);
    });

  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });


    it('should render logout when user navigates to /home', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for home/);
    });

  });

  describe('message', function() {

    beforeEach(function() {
      browser.get('index.html#!/message');
    });


    it('should render logout when user navigates to /message', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
      toMatch(/partial for message/);
    });

  });
});
