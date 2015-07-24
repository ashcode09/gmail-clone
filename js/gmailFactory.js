gmailApp.factory('GmailFactory', function($q, $http, $location) {
  var exports = {};

  exports.messages = [];

  exports.retrieveMessages = function() {
    var deferred = $q.defer();
    return $http.get('json/emails.json')
    .success(function (data) {
      exports.messages = data;
      deferred.resolve(data);
    })
    .error(function(data) {
      deferred.reject(data);
    });
  };

  return exports;
});