define([], function() {
  'use strict';

  /**
   * user is not a service, but stems from userResolve (Check ../user/services.js) object used by dashboard.routes.
   */
  var TableCtrl = function($scope, user) {
    $scope.user = user;
  };
  TableCtrl.$inject = ['$scope', 'user'];

  return {
    TableCtrl: TableCtrl
  };

});
