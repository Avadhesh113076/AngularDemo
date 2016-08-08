var myApp = angular.module("myModule", [])
    .controller("myController", function($scope,$http,$log) {

        var successCallBack=function (response){
                $scope.employees=response.data;
                //$log.info(response);
            };
            var errorCallBack=function (reason){

                $scope.error=reason.data;
                $log.info(reason);
            };
        $http({

            method:'GET',
            url:'http://localhost:8080/book'})
            .then(successCallBack,errorCallBack);
    });
