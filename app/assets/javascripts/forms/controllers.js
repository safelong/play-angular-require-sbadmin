define([], function() {
  'use strict';

  /**
   * user is not a service, but stems from userResolve (Check ../user/services.js) object used by dashboard.routes.
   */
  var FormCtrl = function($scope, user) {
    $scope.user = user;
  };
  FormCtrl.$inject = ['$scope', 'user'];

  return {
    FormCtrl: FormCtrl
  };

});
