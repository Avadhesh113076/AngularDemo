var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {

        var employees = [
            { name: 'ben', gender: "Male",city:"Gajiabad", salary: 55000.788 },
            { name: 'sara', gender: "Male",city:"Varansi", salary: 45000.788 },
            { name: 'mark', gender: "Female",city:"Jaunpur", salary: 35000.788 },
            { name: 'pam',gender: "Male",city:"Lucknow", salary: 25000.788 },
            { name: 'Todd', gender: "Female",city:"Allahabad", salary: 15000.788 },
        ];
        $scope.employees = employees;
        $scope.employeesView = 'employeeDetails.html';

    });
