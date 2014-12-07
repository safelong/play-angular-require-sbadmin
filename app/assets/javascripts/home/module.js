define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function (ng, couchPotato) {

  'use strict';

  var module = ng.module('app.home', [
    'ui.router'
  ]);

  module.config(['$stateProvider', '$couchPotatoProvider', '$urlRouterProvider', 
    function($stateProvider, $couchPotatoProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          root: {
            controller: 'HomeCtrl',
            templateUrl: '/assets/javascripts/home/home.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'home/FooterCtrl',
                'home/HeaderCtrl',
                'home/HomeCtrl'
              ])
            }
          }
        }
      });
    $urlRouterProvider.otherwise('/dashboard');

  }]);

  couchPotato.configureApp(module);

  module.run(function ($couchPotato) {
      module.lazy = $couchPotato;
  });

  return module;
});