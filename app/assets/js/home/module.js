define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function (angular, couchPotato) {
  'use strict';

  var module = angular.module('app.home', [
    'ui.router'
  ]);

  couchPotato.configureApp(module);

  module.config(['$stateProvider', '$couchPotatoProvider', '$urlRouterProvider', 
    function($stateProvider, $couchPotatoProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          root: {
            controller: 'FooterCtrl',
            templateUrl: '/assets/js/home/layout.tpl.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                // 'home/HomeCtrl',
                // 'home/HeaderCtrl',
                'home/FooterCtrl'
              ])
            }
          }
        }
      })
      .state('notfound', {
        views: {
          root: {
            templateUrl: '/assets/js/home/notFound.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/dashboard');

  }]);

  module.run(function ($couchPotato) {
      module.lazy = $couchPotato;
  });

  return module;
});