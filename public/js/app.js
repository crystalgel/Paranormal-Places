var app = angular.module('paranormalApp', ['ngRoute', 'mainCtrl', 'userCtrl', 'userService', 'authService'])
.directive('navBar', navBar)
	//.directive('placesList', placesList)
	.directive('searchForm', searchForm)

	// application configuration to integrate token into requests
	.config(function($httpProvider){
		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor')
	})

	function navBar(){
		var directive = {
			restrict: 'E',
			templateUrl: 'partials/nav.html',
			transclude: true
		}
		return directive
	}
/*
 function placesList(){
 	var directive = {
 		restrict: 'E',
 		templateUrl: 'partials/places-list.html',
 		transclude: true
 	}
 	return directive
 }
 */
 function searchForm(){
 	var directive = {
 		restrict: 'E',
 		templateUrl: 'partials/search.html',
 		transclude: true
 	}
 	return directive
 }
