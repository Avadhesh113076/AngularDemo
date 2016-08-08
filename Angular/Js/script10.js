var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){

				 	var employees=[
				 		{name:'ben',dateOfBirth:new Date('November 23,1980'),gender:'Male',salary:55000.788},
				 		{name:'Sara',dateOfBirth:new Date('May 20,1988'),gender:'Female',salary:45000.788},
				 		{name:'Mark',dateOfBirth:new Date('July 13,1970'),gender:'Male',salary:35000.788},
				 		{name:'Pam',dateOfBirth:new Date('August 10,1980'),gender:'Male',salary:25000.788},
				 		{name:'Todd',dateOfBirth:new Date('March 15,1978'),gender:'Female',salary:15000.788},
				 	];
				 	$scope.employees=employees;
				 	$scope.sortColumn="name";
				 	$scope.reverseSort=false;

				 	$scope.sortData=function(column){
				 		$scope.reverseSort=($scope.sortColumn==column) ? !$scope.reverseSort : false;
				 		$scope.sortColumn=column;
				 	}
				 	$scope.getSortClass=function(column){
				 		if($scope.sortColumn==column){
				 		   return $scope.reverseSort ? 'arrow-down':'arrow-up'
				 		}
				 		
				 			return '';
				 	}
				 });

				