var myApp=angular.module("myModule",[])
				 .controller("myController",function($scope){

				 	var employees=[
				 		{name:'ben',city:'chennai',gender:'Male',salary:55000.788},
				 		{name:'sara',city:'bangalore',gender:'Female',salary:45000.788},
				 		{name:'mark',city:'kolkata',gender:'Male',salary:35000.788},
				 		{name:'pam',city:'mumbai',gender:'Male',salary:25000.788},
				 		{name:'Todd',city:'varansi',gender:'Female',salary:15000.788},
				 	];
				 	$scope.employees=employees;
				 	//$scope.rowLimit=3;
				 	//$scope.selectColumn="name";
				 	$scope.search=function(item){
				 		if($scope.searchText==undefined){
				 				return true;
				 		}
				 		else
				 		{
				 			if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1 ||
				 				item.city.toLowerCase().indexOf($scope.searchText.toLowerCase())!=-1) {
				 					return true;
				 			}
				 		}
				 		return false;
				 	}
				 });

				