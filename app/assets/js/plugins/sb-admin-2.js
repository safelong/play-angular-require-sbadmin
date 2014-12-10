(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  'use strict';

  $('#side-menu').metisMenu();

  //Loads the correct sidebar on window load,
  //collapses the sidebar on window resize.
  // Sets the min-height of #page-wrapper to window size
  $(window).bind("load resize", function() {
    var topOffset = 50;
    var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    if (width < 768) {
      $('div.navbar-collapse').addClass('collapse');
      topOffset = 100; // 2-row-menu
    } else {
      $('div.navbar-collapse').removeClass('collapse');
    }

    var height = (this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height;
    height = height - topOffset;
    if (height < 1) {
      height = 1;
    }
    if (height > topOffset) {
      $("#page-wrapper").css("min-height", (height) + "px");
    }
  });
  
}))


var app=angular.module('App', []);
app.directive('resize', ['$window', function($window) {
  return {
    link: function(scope, elem, attrs) {

      
      
      scope.onResize = function() {
        var header = document.getElementsByTagName('header')[0];
        elem.windowHeight = $window.innerHeight - header.clientHeight;
        $(elem).height(elem.windowHeight);
      }
      scope.onResize();

      angular.element($window).bind('load resize', function() {
        scope.onResize();
        scope.apply();
      })
    }
  }
}])