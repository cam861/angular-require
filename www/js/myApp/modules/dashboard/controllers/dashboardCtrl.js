define(['angular'], function(angular) {
  return angular.module('myApp').controller('dashboardCtrl', ['$scope', function($scope) {
    console.log('loaded the dashboard controller');
  }]);
});
