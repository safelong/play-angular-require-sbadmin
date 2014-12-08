define([
  'home/module',
  'common/services/helper'
], function (module, helper) {

  'use strict';

  return module.registerController('HomeCtrl', function ($scope, $rootScope, $location, helper) {
    /** Controls the index page */
    console.log(helper.sayHi());
    $rootScope.pageTitle = 'Welcome';
  });

});