// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ubsApp =  angular.module('ubsApp', ['ionic']);

ubsApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

ubsApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/app/login');

	$stateProvider
		.state('app', {
			url:"/app",
			abstract: true,
			templateUrl:'partials/template.html'
		})
		.state('app.login', {
			url: '/login',
			views: {
				'mainContent': {
					templateUrl: 'partials/login.html'
				}
			}
		})
		.state('app.main', {
			url:'/main',
			views: {
				'mainContent': {
					templateUrl: 'partials/main.html',
					controller: 'mainCtrl'
				}
			}
		});

});

ubsApp.controller('mainCtrl', function($scope, $ionicNavBarDelegate){
	$scope.onSwipe = function() {
		console.log("hjkjhgfghjkjhg");
	}
})



