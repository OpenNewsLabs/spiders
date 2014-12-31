'use strict';

/* Controllers */

var openNews = angular.module('openNews', []);

openNews.controller('newsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/bbc').success(function(data) {
    $scope.stories = data;
  });
}]);
