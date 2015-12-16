angular.module('paranormalApp')
	.factory('places', places)

places.$inject = ['$http']

// places factory
function places($http){
	var placesUrl = '/api/places'
	var places = {}

	places.list = function(){
		return $http.get(placesUrl)
	}

	places.show = function(placeId){
		return $http.get(placesUrl + '/' + placeId)
	}

	places.addPlace = function(data){
		return $http.post(placesUrl, data)
	}

	return places
}
