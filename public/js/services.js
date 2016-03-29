angular.module('paranormalApp').service('places', function($resource){
	return $resource('/api/places/:id', {id:'@id'}, {

	})
})

angular.module('paranormalApp').service('book', function($resource){
	return $resource('/api/book/:id', {id:'@id'}, {

	})
})


//DEVIN SAYS DONT USE FACTORYS, USE $RESOURCE SERVICE INSTEAD. THIS WORKED BEFORE, BUT WE ARE MODIFYING IT.
// angular.module('paranormalApp').factory('places', places)
//
// places.$inject = ['$http']
//
// // places factory
// function places($http){
// 	var placesUrl = '/api/places'
// 	var places = {}
//
// 	places.list = function(search){
// 		return $http.get(placesUrl + (search ? '?search=' + search : ''))
// 	}
//
// 	places.show = function(placeId){
// 		return $http.get(placesUrl + '/' + placeId)
// 	}
//
// 	places.addPlace = function(data){
// 		return $http.post(placesUrl, data)
// 	}
//
// 	return places
// }
