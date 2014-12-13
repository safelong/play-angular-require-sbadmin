define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function (angular, couchPotato) {
  "use strict";

  var module = angular.module('app.charts', ['ui.router']);

  couchPotato.configureApp(module);

  module.config(['$stateProvider', '$couchPotatoProvider', function ($stateProvider, $couchPotatoProvider) {

    $stateProvider
      .state('app.charts', {
        abstract: true,
        data: {
          title: 'Charts'
        }
      })
      .state('app.charts.flot', {
        url: '/charts/flot',
        data: {
          title: 'Flot Charts'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/charts/flot.html'
          }
        }
      })
      .state('app.charts.morris', {
        url: '/charts/morris',
        data: {
          title: 'Morris Charts'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/charts/morris.html'
          }
        }
      });

  }]);

  module.run(['$couchPotato', function ($couchPotato) {
    module.lazy = $couchPotato;
  }]);

  return module;

});
