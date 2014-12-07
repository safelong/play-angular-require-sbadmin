/**
 * The app module, as both AngularJS as well as RequireJS module.
 * Splitting an app in several Angular modules serves no real purpose in Angular 1.2.
 * (Hopefully this will change in the near future.)
 * Splitting it into several RequireJS modules allows async loading. We cannot take full advantage
 * of RequireJS and lazy-load stuff because the angular modules have their own dependency system.
 */
define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'angular-bootstrap'
], function(angular, couchPotato) {
  'use strict';

  // We must already declare most dependencies here (except for common), or the submodules' routes
  // will not be resolved
  var app = angular.module('app', [
    'scs.couch-potato',
    'ui.router',
    'ui.bootstrap',

    'app.common',
    'app.dashboard',
    'app.home'
    //,'app.user'
  ]);

  couchPotato.configureApp(app);

  app.config(function ($provide, $httpProvider) {

    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', function ($q) {
      // var errorCounter = 0;
      function notifyError(rejection){
          console.log(rejection);
          // $.bigBox({
          //     title: rejection.status + ' ' + rejection.statusText,
          //     content: rejection.data,
          //     color: "#C46A69",
          //     icon: "fa fa-warning shake animated",
          //     number: ++errorCounter,
          //     timeout: 6000
          // });
      }

      return {
        // On request failure
        requestError: function (rejection) {
            // show notification
            notifyError(rejection);

            // Return the promise rejection.
            return $q.reject(rejection);
        },

        // On response failure
        responseError: function (rejection) {
          // show notification
          notifyError(rejection);
          // Return the promise rejection.
          return $q.reject(rejection);
        }
      };
    });

    // Add the interceptor to the $httpProvider.
    $httpProvider.interceptors.push('ErrorHttpInterceptor');

  });

  app.config(function($provide) {

    // with this, you can use $log('Message') same as $log.info('Message');
    $provide.decorator('$log', ['$delegate', function($delegate) {
      // create a new function to be returned below as the $log service (instead of the $delegate)
      function logger() {
        // if $log fn is called directly, default to "info" message
        logger.info.apply(logger, arguments);
      }
      // add all the $log props into our new logger fn
      angular.extend(logger, $delegate);
      return logger;
    }]);

  });

  app.run(function ($couchPotato, $rootScope, $state, $stateParams) {
    app.lazy = $couchPotato;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

  return app;
});
