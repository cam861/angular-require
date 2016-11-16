define([
  'angular',
  'angular-ui-router',
  'ocLazyLoad',
  'myApp'

], function(myApp) {

  angular.module('myApp', [
    'ui.router',
    'oc.lazyLoad'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$ocLazyLoadProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $stateProvider.state(
      'dashboard', {
        url: '/dashboard',
        template: '<h1>DASHBOARD</h1>',
        controller: 'dashboardCtrl',
        resolve: {
          dashboardCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            console.log('Loading controller...');
            return $ocLazyLoad.load('js/myApp/modules/dashboard/controllers/dashboardCtrl.js')
            .then(function(data) {
              console.log(data);
            })
            .catch(function(err) {
              console.log(err);
            });
          }]
        }
      }
    );

  }]);

})
