define(['home/module'], function (module) {

  'use strict';

  return module.registerController('HeaderCtrl', function ($scope, userService, helper, $location) {
    // Wrap the current user from the service in a watch expression
    $scope.$watch(function() {
      var user = userService.getUser();
      return user;
    }, function(user) {
      $scope.user = user;
    }, true);

    $scope.logout = function() {
      userService.logout();
      $scope.user = undefined;
      $location.path('/');
    };
  });

});