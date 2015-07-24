gmailApp.directive('inbox', function() {
  return {
    scope: true,
    replace: true,
    restrict: 'EA',
    templateUrl: 'js/gmailDirective.tmpl.html',
    controllerAs: 'inbox',
    controller: function(GmailFactory) {
      this.messages = [];
      GmailFactory.retrieveMessages()
      .then(angular.bind(this, function then() {
        this.messages = GmailFactory.messages;
      }));
    }
  };
});