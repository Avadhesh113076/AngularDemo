var myApp = angular.module("myModule", ["ui.router"])
    .config(function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider) {
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlRouterProvider.otherwise('/home')
        $stateProvider
            .state('home', {
                url:'/home',
                templateUrl: 'Templates/home.html',
                controller: 'homeController',
                controllerAs:'homeCtrl',
                data:{
                    customData1:"Home state custom data1",
                    customData2:"Home state custom data2",
                }
            })
            .state('cources', {
                url:'/cources',
                templateUrl: 'Templates/cources.html',
                controller: 'courcesController',
                controllerAs:'courcesCtrl',
                 data:{
                    customData1:"Cources state custom data1",
                    customData2:"Cources state custom data2",
                }
            })
            .state('students', {
                url:'/students',
                templateUrl: 'Templates/students.html',
                controller: 'studentsController',
                controllerAs:'studentsCtrl',
                resolve:{
                    studentsList: function($http){
                            return $http({

                                        method:'GET',
                                        url:'http://localhost:8080/book'})
                                        .then(function(response){
                                              return response.data;
                                        });
                    }
                }
            })
            .state('studentDetails', {
                url:'/students/:id',
                templateUrl: 'Templates/studentDetails.html',
                controller: 'studentDetailsController',
                controllerAs:'studentsDetailsCtrl'
            })
            .state('studentsSearch', {
                 url:'/studentsSearch/:name',
                templateUrl: 'Templates/studentsSearch.html',
                controller: 'studentsSearchController',
                controllerAs:'studentsSearchCtrl'
            })
            /* .otherwise({ redirectTo: '/home' })
            $locationProvider.html5Mode(true);*/
    })
    .controller('homeController', function() {
        this.message = "Home Page";
    })
    .controller('courcesController', function() {
        this.cources = ['C', 'Java', 'C#', 'Sql'];
    })
    .controller('studentsController', function(studentsList,$http,$state,$scope,$log,$location) {
    
        var vm=this;  
            vm.searchStudents=function(){
                $state.go('studentsSearch',{name: vm.name});
            }
        
          vm.reloadData=function(){
              $state.reload();
          }
          vm.students=studentsList;
    })
   .controller('studentDetailsController', function($http,$log,$stateParams) {
        var vm=this;
        var successCallBack=function (response){
                vm.student=response.data;
                console.log(vm.student)
                $log.info(response.data);
            };
            var errorCallBack=function (reason){
                vm.error=reason.data;
                $log.info(reason);
            };
        $http({
                url:'http://localhost:8080/book/',
                params:{id:$stateParams.id},
                method:'GET'
            })
            .then(successCallBack,errorCallBack);
    })
 
    .controller('studentsSearchController', function($http,$stateParams,$log) {
        var vm=this;
        var successCallBack=function (response){
                vm.students=response.data;
                $log.info(response.data);
            };
            var errorCallBack=function (reason){
                vm.error=reason.data;
                $log.info(reason);
            };
            if ($stateParams.name) {
                    $http({
                    url:'http://localhost:8080/book?bookName_like=',
                    params:{name:$stateParams.name},
                    method:'GET'
                    })
                    .then(successCallBack,errorCallBack);
            }
            else{
                $http({
                    method:'GET',
                    url:'http://localhost:8080/book'
                })
                .then(successCallBack,errorCallBack);
                }
        
    });