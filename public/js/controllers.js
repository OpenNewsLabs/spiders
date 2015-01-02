'use strict';

/* Controllers */

var openNews = angular.module('openNews', []);

openNews.controller('newsListCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.hasImg = function(message) {
        return message.hasOwnProperty('img')
  }

  $http.get('/bbc').success(function(data) {
    $scope.bbc = data;
  });

  $http.get('/nyt').success(function(data) {
    $scope.nyt = data;
  });

  $http.get('/fox').success(function(data) {
    $scope.fox = data;
  });

  $http.get('/cnn').success(function(data) {
    $scope.cnn = data;
  });

}]);
