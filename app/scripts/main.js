var app = angular.module('myApp', ['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/welcome');
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            views: {
                header: {
                    templateUrl: '/header.html'
                },
                content:{
                    templateUrl: 'modules/welcomePage.html'
                }
            }
        })
        .state('login', {
            url: '/login',
            views: {
                header: {
                    templateUrl: '/header.html'
                },
                content:{
                    templateUrl: 'modules/loginPage.html'
                }
            }
        })
        .state('createAccount', {
            url: '/createAccount',
            views: {
                header: {
                    templateUrl: '/header.html'
                },
                content:{
                    templateUrl: 'modules/createAccountPage.html'
                }
            }
        })
        .state('contactus', {
            url: '/contactus',
            views: {
                header: {
                    templateUrl: '/header.html'
                },
                content:{
                    templateUrl: 'modules/contactUsPage.html'
                }
            }
        })
}]);
app.controller('MainController',['$scope',function($scope){}]);

app.controller('CreateAccountController',['$scope',function($scope){}]);

app.controller('LoginController',['$scope',function($scope){}]);