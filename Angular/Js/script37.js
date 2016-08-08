var myApp = angular.module("myModule", [])
    .controller("redColorController", function($scope,$rootScope) {
        $scope.redColor="I am red color";
        $rootScope.rootScoopColor='I am rootScoop color';
    })
    .controller("greenColorController", function($scope) {
        $scope.greenColor="I am green color";
    });
