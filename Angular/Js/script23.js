var myApp = angular.module("myModule", ["ngRoute"])
    .config(function($routeProvider,$locationProvider) {
        $routeProvider.caseInsensitiveMatch=true;
        $routeProvider
            .when('/home', {
                /*template: '<h1>Inline Template in action</h1>',*/
                templateUrl: 'Templates/home.html',
                controller: 'homeController',
                controllerAs:'homeCtrl'
            })
            .when('/cources', {
                templateUrl: 'Templates/cources.html',
                controller: 'courcesController',
                controllerAs:'courcesCtrl'
            })
            .when('/students', {
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
            .when('/students/:id', {
                templateUrl: 'Templates/studentDetails.html',
                controller: 'studentDetailsController',
                controllerAs:'studentsDetailsCtrl'
            })
             .when('/studentsSearch/:name?', {
                templateUrl: 'Templates/studentsSearch.html',
                controller: 'studentsSearchController',
                controllerAs:'studentsSearchCtrl'
            })
            .otherwise({ redirectTo: '/home' })
            $locationProvider.html5Mode(true);
    })
    .controller('homeController', function() {
        this.message = "Home Page";
    })
    .controller('courcesController', function() {
        this.cources = ['C', 'Java', 'C#', 'Sql'];
    })
    .controller('studentsController', function(studentsList,$http,$route,$scope,$log,$location) {
       /* $scope.$on("$routeChangeStart", function(event,next,current){
            if(!confirm("Are you sure want to navigate away from this page to"+next.$$route.originalPath)){
                console.log('cources');
                event.preventDefault();
            }
        });
        
        /* $scope.$on("$locationChangeStart", function(event,next,current){
            if(!confirm("Are you sure want to navigate away from this page to"+next)){
                event.preventDefault();
            }
        });*/

       /* $scope.$on("$locationChangeStart", function(event,next,current){
                $log.debug("Location change start fird");
                $log.debug(event);
                $log.debug(next);
                $log.debug(current);
        });

        $scope.$on("$routeChangeStart", function(event,next,current){
                $log.debug("Route change start fird");
                $log.debug(event);
                $log.debug(next);
                $log.debug(current);
        });*/

        var vm=this;  
            vm.searchStudents=function(){
                if (vm.name) {
                    console.log(vm.name);
                    $location.url("/studentsSearch/"+vm.name);
                }
                else{
                    $location.url("/studentsSearch");
                }
            }
        
          vm.reloadData=function(){
              $route.reload();
          }
          vm.students=studentsList;
        /*var successCallBack=function (response){
                vm.students=response.data;
            };
            var errorCallBack=function (reason){
                vm.error=reason.data;
                $log.info(reason);
            };

         $http({

            method:'GET',
            url:'http://localhost:8080/book'})
            .then(successCallBack,errorCallBack);*/
    })
    .controller('studentDetailsController', function($http,$log,$routeParams) {
        var vm=this;
        var successCallBack=function (response){
                vm.student=response.data;
                $log.info(response.data);
            };
            var errorCallBack=function (reason){
                vm.error=reason.data;
                $log.info(reason);
            };
        $http({
                url:'http://localhost:8080/book/',
                params:{id:$routeParams.id},
                method:'GET'
            })
            .then(successCallBack,errorCallBack);
    })

    .controller('studentsSearchController', function($http,$routeParams,$log) {
        var vm=this;
        var successCallBack=function (response){
                vm.students=response.data;
                $log.info(response.data);
            };
            var errorCallBack=function (reason){
                vm.error=reason.data;
                $log.info(reason);
            };
            if ($routeParams.name) {
                    $http({
                    url:'http://localhost:8080/book?name_like',
                    params:{name:$routeParams.name},
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
