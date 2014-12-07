define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  './services'
], function (angular, couchPotato) {

  'use strict';

  var module = angular.module('app.user', [
    'ui.router',
    'ngCookies',
    'user.services',
    'app.common'
  ]);

  module.config(['$stateProvider', '$couchPotatoProvider', function($stateProvider, $couchPotatoProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          "content@app": {
            controller: 'LoginCtrl',
            templateUrl: '/assets/javascripts/user/login.html',
            resolve: {
              deps: $couchPotatoProvider.resolveDependencies([
                'user/LoginCtrl'
              ])
            }
          }
        },
        data:{
          title: 'Login'
        }
      });
  }]);

  couchPotato.configureApp(module);

  module.run(function ($couchPotato) {
      module.lazy = $couchPotato;
  });

  return module;
});