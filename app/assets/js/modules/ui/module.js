define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router'
], function(angular, couchPotato){
  "use strict";

  var module = angular.module('app.ui', ['ui.router']);

  couchPotato.configureApp(module);

  module.config(function($stateProvider, $couchPotatoProvider){

    $stateProvider
      .state('app.ui', {
        abstract: true,
        data: {
          title: 'UI Elements'
        }
      })
      .state('app.ui.grid', {
        url: '/ui/grid',
        data: {
          title: 'Grid'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/ui/grid.html'
          }
        }
      })
      .state('app.ui.buttons', {
        url: '/ui/buttons',
        data: {
          title: 'Buttons'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/ui/buttons.html'
          }
        }
      })
      .state('app.ui.typography', {
        url: '/ui/typography',
        data: {
          title: 'Typography'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/ui/typography.html'
          }
        }
      })
      .state('app.ui.panels-wells', {
        url: '/ui/panelswells',
        data: {
          title: 'Panels and Wells'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/ui/panels-wells.html'
          }
        }
      })
      .state('app.ui.notifications', {
        url: '/ui/notifications',
        data: {
          title: 'Notifications'
        },
        views: {
          "content@app": {
            templateUrl: '/assets/js/modules/ui/notifications.html'
          }
        }
      });
  });

  module.run(function($couchPotato){
    module.lazy = $couchPotato;
  });

  return module;
});