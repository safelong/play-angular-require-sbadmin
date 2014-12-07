define(['user/module'], function (module) {

  'use strict';

  return module.registerController('LoginCtrl', function ($scope, $location, userService) {
    $scope.credentials = {};

    $scope.login = function(credentials) {
      userService.loginUser(credentials).then(function(/*user*/) {
        $location.path('/dashboard');
      });
    };
  });

});