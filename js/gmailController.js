gmailApp.controller('gmailCtrl', function($scope, GmailFactory) {
  $scope.title = "cloneMail";

  GmailFactory.retrieveMessages()
  .success(function(jsonData, statusCode) {
    console.log("We have your emails...", jsonData, statusCode);
    $scope.emails = jsonData;
  });
});