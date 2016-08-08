var myApp = angular.module("myModule", [])
    .controller("myController", function($scope, $location, $anchorScroll) {

        $scope.scrollTo = function(scollLocation) {
            $location.hash(scollLocation);
            $anchorScroll.yOffset=20;
            anchorScroll();
        }
    });
