define([
	'angular',
	'angular-couch-potato',
	'angular-ui-router',
	'common'
], function (ng, couchPotato) {

	'use strict';

	var module = ng.module('app.dashboard', [
		'ui.router'
	]);

	module.config(['$stateProvider', 'userResolve', function($stateProvider, $couchPotatoProvider, userResolve) {
		$stateProvider
			.state('app.dashboard', {
				url: '/dashboard',
				views: {
					"content@app": {
						controller: 'DashboardCtrl',
						templateUrl: '/assets/javascripts/dashboard/dashboard.html',
						resolve: {
							deps: $couchPotatoProvider.resolveDependencies([
								'dashboard/DashboardCtrl'
							]),
							user: userResolve
						}
					}
				},
				data:{
					title: 'Dashboard'
				}
			});
	}]);

	couchPotato.configureApp(module);

  module.run(function ($couchPotato) {
      module.lazy = $couchPotato;
  });

	return module;
});