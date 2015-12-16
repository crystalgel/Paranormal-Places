angular.module('paranormalApp')
	.config(['$routeProvider', placeRoutes])

function placeRoutes($routeProvider){
	$routeProvider.
      when('/places', {
        templateUrl: 'partials/places-list.html',
        controller: 'placesController',
        controllerAs: 'placesCtrl'
      }).
      when('/places/:placeId', {
        templateUrl: 'partials/place-detail.html',
        controller: 'placeDetailController',
        controllerAs: 'placeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/places'
      });
}
