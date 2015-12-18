
app.controller('placesController', function (places, $scope) {
	$scope.name = 'Place List'
	$scope.places = []
	places.list().success(function(response) {
		$scope.places = response
	})
})

app.controller('placeDetailController', function (places, $routeParams, $scope) {
	$scope.name = 'Place Detail'
	$scope.place = null

	places.show($routeParams.placeId).success(function(response) {
		$scope.place = response
	})
})

app.controller('FetchController', function($scope, $location) {
	$scope.go = function() {
		$location.url('/places?search=' + $scope.search);
	}
})

