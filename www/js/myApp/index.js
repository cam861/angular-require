define([
  'angular',
  'angular-ui-bootstrap',
  'ocLazyLoad'
], function(angular) {
  console.log('here');
  return angular.module('myApp', ['ui.bootstrap', 'oc.lazyLoad'])
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: true,
      events: true,
      modules: true
    });
  }]);

});
