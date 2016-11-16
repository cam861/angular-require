define(['angular', 'myApp'], function(angular) {
  angular.module('myApp').controller('test', ['$scope', function($scope) {
    $scope.test = 'This has changed now :)';
  }]);
});
