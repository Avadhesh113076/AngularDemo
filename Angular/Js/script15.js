var myApp = angular.module("myModule", [])
    .controller("myController", function($scope) {

        var countries = [
              {
                    name:'India',
                    cities:[
                        {name:'Hyderabad'}, 
                        {name:'Chennai'} 
                    ]
              },
              {
                    name:'USA',
                    cities:[
                    {name:'Los Angels'},
                    {name:'Chicago'} 
                    ]
              }
        ];
        $scope.countries = countries;
       

    });
