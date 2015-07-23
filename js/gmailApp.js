gmailApp = angular.module('GmailApp', ['ngRoute']);

gmailApp.config(function ($routeProvider) {
  $routeProvider
  .when('/inbox', {
    templateUrl: 'views/inbox.html',
    controller: 'gmailCtrl',
    controllerAs: 'inbox'
  })
  .when('/inbox/email/:id', {
    templateUrl: 'views/email.html',
    controller: 'EmailCtrl',
    controllerAs: 'email'
  })
  .otherwise({
    redirectTo: '/inbox'
  });
});