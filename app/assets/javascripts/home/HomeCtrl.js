define(['home/module'], function (module) {

  'use strict';

  return module.registerController('HomeCtrl', function ($scope, $rootScope, $location, helper) {
    /** Controls the index page */
    console.log(helper.sayHi());
    $rootScope.pageTitle = 'Welcome';
  });

});