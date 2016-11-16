define([
  'angular',
  'angular-ui-bootstrap',
  'ocLazyLoad'
], function(angular) {

  return angular.module('myApp', ['ui.bootstrap', 'oc.lazyLoad'])
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: true,
      events: true,
      modules: true
    });
  }])
  .run(function($ocLazyLoad) {
    $ocLazyLoad.load('controllers/testCtrl.js');
  });

});
