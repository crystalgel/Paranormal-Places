var app = angular.module('paranormalApp', ['ngRoute', 'ngResource', 'mainCtrl', 'userCtrl', 'userService', 'authService'])
.directive('navBar', navBar)
	//.directive('placesList', placesList)
	.directive('searchForm', searchForm)

	// application configuration to integrate token into requests
	.config(function($httpProvider){
		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor')

	})

	.run(function($rootScope, $route) {
		 $rootScope.$on('$routeChangeSuccess', function () {
		 	var body = angular.element(document.getElementsByTagName('body')[0]);
			body.removeClass(function (index, css) {
				return (css.match (/\bpage-\S+/g) || []).join(' ');
			}).addClass('page-' + $route.current.action);
		});
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
