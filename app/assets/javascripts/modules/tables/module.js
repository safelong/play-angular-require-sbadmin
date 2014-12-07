define([
  'angular', 
  'common'
], function(angular) {
  'use strict';

  var module = angular.module('yourprefix.tables', [
    'ngRoute', 
    'yourprefix.common'
  ]);

  module.config(['$routeProvider', 'userResolve', function($routeProvider, userResolve) {
    $routeProvider
      .when('/tables',  {
        templateUrl: '/assets/javascripts/modules/tables/tables.html',  
        controller: 'TableCtrl', 
        resolve: userResolve
      });
  }]);

  return module;
});
