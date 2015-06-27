// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ubsApp =  angular.module('ubsApp', ['ionic', 'ng-mfb']);

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
		})
		.state('app.statement', {
			url:'/statement',
			views: {
				'mainContent': {
					templateUrl: 'partials/statement.html',
					controller: 'mainCtrl'
				}
			}
		})
		.state('app.statement-details', {
			url:'/statement-details',
			views: {
				'mainContent': {
					templateUrl: 'partials/statement-details.html',
					controller: 'mainCtrl'
				}
			}
		})
		.state('app.transaction', {
			url:'/transaction',
			views: {
				'mainContent': {
					templateUrl: 'partials/transaction.html',
					controller: 'mainCtrl'
				}
			}
		});

});

ubsApp.controller('mainCtrl', function($http, $scope, $state, $ionicPopup){

	$scope.months = ['January', 'February', 'March', 'April', 'May',
		'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	$http.get('statement.json').success(function(data){
		$scope.statements = data.statements;
	})

	$scope.showPopup = function(name) {
			$scope.data = {}

		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<input type="password" ng-model="data.wifi">',
			title: 'Enter PIN password',
			subTitle: 'To confrim '+name+' Please enter PIN from token',
			scope: $scope,
			buttons: [
				{ text: 'Cancel' },
				{
					text: '<b>'+name+'</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.wifi) {
							//don't allow the user to close unless he enters wifi password
							e.preventDefault();
						} else {
							$state.go('app.transaction');
						}
					}
				}
			]
		});
		myPopup.then(function(res) {
			console.log('Tapped!', res);
		});
	};
})



