define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function (angular, couchPotato) {

  'use strict';

  var module = angular.module('app.dashboard', [
    'ui.router'
    //,'app.common'
  ]);

  module.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider/*, userResolve*/) {
    $stateProvider
      .state('app.dashboard', {
        url: '/',
        views: {
          "content@app": {
            controller: 'DashboardCtrl',
            templateUrl: '/assets/js/dashboard/dashboard.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'dashboard/DashboardCtrl'
              ])
              //,user: userResolve
            }
          }
        },
        data:{
          title: 'Dashboard'
        }
      });
  }]);

  couchPotato.configureApp(module);

  module.run(['$couchPotato', function ($couchPotato) {
      module.lazy = $couchPotato;
  }]);

  return module;
});