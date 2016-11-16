requirejs.config({
  paths: {
    'jQuery': '/node_modules/jquery/dist/jquery.min',
    'angular': '/node_modules/angular/angular.min',
    'bootstrap': '/node_modules/bootstrap/dist/js/bootstrap.min',
    'angular-ui-bootstrap': '/node_modules/angular-ui-bootstrap/dist/ui-bootstrap',
    'angular-ui-router': '/node_modules/angular-ui-router/release/angular-ui-router.min',
    'ocLazyLoad': '/node_modules/oclazyload/dist/ocLazyLoad.min',

    // main angular application
    'dashboard': '/js/myApp/modules/dashboard/module',
    'myApp': '/js/myApp/index',
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'angular': {
      exports: 'angular'
    },
    'bootstrap': ['jQuery'],
    'angular-ui-bootstrap': ['angular', 'bootstrap'],
    'angular-ui-router': ['angular'],
    'ocLazyLoad': ['angular'],
    'myApp': [
      'angular',
      'angular-ui-bootstrap',
      'angular-ui-router',
      'ocLazyLoad'
    ],
    'dashboard': [
      'myApp'
    ]
  },

});

define([
  'myApp',
  'dashboard'
], function() {
  console.log('HERE');
  angular.bootstrap(document, ['myApp']);
});
