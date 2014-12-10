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

      'sb-admin-2': 'plugins/sb-admin-2',
      'datatables': 'plugins/dataTables/jquery.dataTables',
      'datatables-bootstrap': 'plugins/dataTables/dataTables.bootstrap',
      'flot': 'plugins/flot/jquery.flot',
      'flot-resize': 'plugins/flot/jquery.flot.resize',
      'flot-pie': 'plugins/flot/jquery.flot.pie',
      'flot-tooltip': 'plugins/flot/jquery.flot.tooltip',
      'metis-menu': 'plugins/metisMenu/metisMenu',
      'raphael': 'plugins/morris/raphael.min',
      'morris': 'plugins/morris/morris.min'

    },
    shim: {
      'jsRoutes': {
        deps: [],
        // it's not a RequireJS module, so we have to tell it what var is returned
        exports: 'jsRoutes'
      },
      // Hopefully this all will not be necessary but can be fetched from WebJars in the future
      'angular': { deps: ['jquery'], exports: 'angular' },
      'angular-route': ['angular'],
      'angular-cookies': ['angular'],
      'angular-bootstrap': ['angular'],
      'angular-ui-router': [ "angular" ],
      'angular-couch-potato': ['angular'],
      'bootstrap': ['jquery'],

      'sb-admin-2': ['jquery'],
      'datatables': ['jquery'],
      'datatables-bootstrap': ['datatables'],
      'flot': ['jquery'],
      'flot-resize': ['flot'],
      'flot-pie': ['flot'],
      'flot-tooltip': ['flot'],
      'morris': ['raphael'] 
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
    
    './app',
    './includes'
  ], function (angular) {

      // You can place operations that need to initialize prior to app start here
      // using the `run` function on the top-level module

      // as script is at the very bottom of the page no waiting for domReady
      angular.bootstrap(document, ['app']);
    }
  );
})(requirejs);
