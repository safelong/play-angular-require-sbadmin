define(['angular', './controllers', 'common'], function(angular, controllers) {
  'use strict';

  var mod = angular.module('forms.routes', ['yourprefix.common']);
  mod.config(['$routeProvider', 'userResolve', function($routeProvider, userResolve) {
    $routeProvider
      .when('/forms',  {
        templateUrl: '/assets/javascripts/forms/forms.html',  
        controller: controllers.FormCtrl, 
        resolve:userResolve
      });
  }]);
  return mod;
});
