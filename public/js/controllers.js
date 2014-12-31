'use strict';

/* Controllers */

var openNews = angular.module('openNews', []);

openNews.controller('newsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/bbc').success(function(data) {
    $scope.bbc = data;
  });

  $http.get('/fox').success(function(data) {
    $scope.fox = data;
  });

  $http.get('/cnn').success(function(data) {
    $scope.cnn = data;
  });

}]);
