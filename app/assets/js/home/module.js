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

  module.config(['$stateProvider', '$couchPotatoProvider', '$urlRouterProvider', function($stateProvider, $couchPotatoProvider, $urlRouterProvider) {

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
                'home/FooterCtrl',
                'home/sideMenu'
              ])
            }
          }
        }
      })
      .state('app.notfound', {
        url: '/notfound',
        views: {
          "content@app": {
            templateUrl: '/assets/js/home/notFound.html'
          }
        }
      });

    //$urlRouterProvider.otherwise('/');

    $urlRouterProvider.otherwise(function ($injector, $location) {
      var $state = $injector.get('$state');
      $state.go('app.notfound', {
        title: "Page not found",
        message: 'Could not find a state associated with url "'+$location.$$url+'"'
      });
    });

  }]);

  module.run(['$couchPotato', function ($couchPotato) {
      module.lazy = $couchPotato;
  }]);

  return module;
});