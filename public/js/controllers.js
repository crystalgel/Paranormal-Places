(function(){
	angular.module('paranormalApp')
		.controller('placesController', placesController)
		.controller('placeDetailController', placeDetailController)


		.controller('FetchController', ['$scope', '$http', '$templateCache',
		  function($scope, $http, $templateCache) {
		    $scope.method = 'GET'
		    $scope.url = 'search.html'

		    $scope.fetch = function() {
		      $scope.code = null
		      $scope.response = null

		      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
		        then(function(response) {
		          $scope.status = response.status
		          $scope.data = response.data
		        }, function(response) {
		          $scope.data = response.data || "Request failed"
		          $scope.status = response.status
		      })
		    }

		    $scope.updateModel = function(method, url) {
		      $scope.method = method
		      $scope.url = url
		    }
		  }])


	function placesController(places){
		var self = this
		self.name = 'Place List'
		self.api = places
		self.places = []

		self.api.list().success(function(response){
			self.places = response
		})

// SHOW PLACES FUNCTION

		// self.addCar = function(make,model,year){
		// 	var data = {make: make, model: model, year: year}
		// 	cars.addCar(data).then(function success(response){
		//
		// 		//notice the format of the data we need to push to the array:
		// 		console.log(response)
		// 
		// 		self.cars.push(response.data.car)
		// 	})
		// }
	}

	function placeDetailController(places,$routeParams){
		var self = this
		self.name = 'Place Detail'
		self.api = places
		self.place = null
		self.showPlace = function(placeId){
			self.api.show(placeId).success(function(response){
				self.place = response
			})
		}
		self.showPlace($routeParams.placeId)
	}
}())
