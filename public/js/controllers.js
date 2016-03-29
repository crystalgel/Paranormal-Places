
app.controller('placesController', function (places, $routeParams, $scope) {
	$scope.name = 'Place List'
	$scope.places = []
	console.log ($routeParams)
	places.query({search:$routeParams.search}, function(response) { //put search paramaters in {}
		$scope.places = response
	})
})

app.controller('placeDetailController', function (places, $routeParams, $scope) {
	$scope.name = 'Place Detail'
	$scope.place = null

	places.get({id:$routeParams.placeId}, function(response) {
		$scope.place = response
	})
})

app.controller('FetchController', function($scope, $location) {
	$scope.go = function() {
		$location.url('/places?search=' + $scope.search);
	}
})


app.controller('bookController', function($scope, $location, book) {
	$scope.book = {}
	$scope.submit = function(){
		book.save($scope.book, function(){
			console.log (arguments) //an array of arguments passed through the function
		})
	}
})
