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

  module.config(function($stateProvider, $couchPotatoProvider/*, userResolve*/) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
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
  });

  couchPotato.configureApp(module);

  module.run(function ($couchPotato) {
      module.lazy = $couchPotato;
  });

  return module;
});