angular.module('paranormalApp', ['ngRoute'])
	.directive('navBar', navBar)
	// .directive('placeForm', placeForm)
	.directive('searchForm', searchForm)


function navBar(){
	var directive = {
		restrict: 'E',
		templateUrl: 'partials/nav.html',
		transclude: true
	}
	return directive
}

// function placeForm(){
// 	var directive = {
// 		restrict: 'E',
// 		templateUrl: 'partials/place-list.html',
// 		transclude: true
// 	}
// 	return directive
// }
//
function searchForm(){
	var directive = {
		restrict: 'E',
		templateUrl: 'partials/search.html',
		transclude: true
	}
	return directive
}
