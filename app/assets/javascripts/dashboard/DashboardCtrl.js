define(['dashboard/module'], function(module) {
  'use strict';

  /**
   * user is not a service, but stems from userResolve (Check ../user/services.js) object used by dashboard.routes.
   */
  module.registerController('DashboardCtrl', function ($scope, user) {
    $scope.user = user;
  });

  module.registerController('AdminDashboardCtrl', function ($scope, user) {
    $scope.user = user;
  });

  return module;

});
