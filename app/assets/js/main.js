// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
  'use strict';

  // -- RequireJS config --
  requirejs.config({
    // Packages = top-level folders; loads a contained file named 'main.js"
    //packages: ['common', 'home', 'user', 'dashboard', 'forms'],
    paths: {
      'requirejs': '../lib/requirejs/require',
      'jquery': '../lib/jquery/jquery',
      'angular': '../lib/angularjs/angular',
      'angular-route': '../lib/angularjs/angular-route',
      'angular-cookies': '../lib/angularjs/angular-cookies',
      'angular-bootstrap': '../lib/angular-ui-bootstrap/ui-bootstrap-tpls.min',
      'angular-ui-router': '../lib/angular-ui-router/angular-ui-router.min',
      'angular-couch-potato': 'plugins/angular-couch-potato/angular-couch-potato',
      'bootstrap': '../lib/bootstrap/js/bootstrap',
      'jsRoutes': '/jsroutes',

      'sb-admin-2': 'sb-admin-2',

      'datatables': 'plugins/dataTables/jquery.dataTables',
      'datatables-bootstrap': 'plugins/dataTables/dataTables.bootstrap',
      'flot': 'plugins/flot/jquery.flot',
      'flot-resize': 'plugins/flot/jquery.flot.resize',
      'flot-pie': 'plugins/flot/jquery.flot.pie',
      'flot-tooltip': 'plugins/flot/jquery.flot.tooltip',
      'metis-menu': 'plugins/metisMenu/metisMenu',
      'morris': 'plugins/morris'

    },
    shim: {
      'jsRoutes': {
        deps: [],
        // it's not a RequireJS module, so we have to tell it what var is returned
        exports: 'jsRoutes'
      },
      // Hopefully this all will not be necessary but can be fetched from WebJars in the future
      'angular': {
        deps: ['jquery'],
        exports: 'angular'
      },
      'angular-route': ['angular'],
      'angular-cookies': ['angular'],
      'angular-bootstrap': ['angular'],
      'angular-ui-router': [ "angular" ],
      'angular-couch-potato': ['angular'],
      'bootstrap': ['jquery'],

      'datatables':{deps: ['jquery']},
      'datatables-bootstrap':{deps: ['datatables']},
      'flot': { deps: ['jquery']},
      'flot-resize': { deps: ['flot']},
      'flot-pie': { deps: ['flot']},
      'flot-tooltip': { deps: ['flot']},
    },
    priority: [
      'jquery',
      'bootstrap',
      'angular'
    ]
  });

  requirejs.onError = function (err) {
    console.log(err);
  };

  // Load the app. This is kept minimal so it doesn't need much updating.
  require([
    'angular', 
    'angular-cookies',
    'jquery', 
    'bootstrap', 
    
    'app',
    'includes'
  ], function (angular) {
      angular.bootstrap(document, ['app']);
    }
  );
})(requirejs);
