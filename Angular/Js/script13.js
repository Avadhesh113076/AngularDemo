var myApp = angular.module("myModule", [])
    .filter('gender', function() {
        return function(gender) {
            switch (gender) {
                case 1:
                    return 'Male';
                case 2:
                    return 'Female';
                case 3:
                    return 'Not Disclosed';
            }
        }
    })
    .controller("myController", function($scope) {

        var employees = [
            { name: 'ben', gender: 1, salary: 55000.788 },
            { name: 'sara', gender: 2, salary: 45000.788 },
            { name: 'mark', gender: 1, salary: 35000.788 },
            { name: 'pam',gender: 1, salary: 25000.788 },
            { name: 'Todd', gender: 3, salary: 15000.788 },
        ];
        $scope.employees = employees;


    });
