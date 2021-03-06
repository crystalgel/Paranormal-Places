app
.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'partials/home.html',
			action: 'home'
		})

		.when('/places', {
			templateUrl : 'partials/places-list.html',
			controller: 'placesController',
			action: 'places'
		})
		.when('/place/:placeId', {
			templateUrl: 'partials/place-detail.html',
			controller: 'placeDetailController',
			action: 'place'
		})
		.when('/book/:placeId', {
			templateUrl: 'partials/book-form.html',
			controller: 'bookController',
			action: 'book'
		})

		// login page
		.when('/login', {
			templateUrl : 'partials/login.html',
			controller  : 'mainController',
			controllerAs: 'login',
			action: 'login'
		})

		/*
		// show all users
		.when('/users', {
		templateUrl: 'app/views/pages/users/all.html',
		controller: 'userController',
		controllerAs: 'user'
		})
*/

		// form to create a new user
		// same view as edit page


		// page to edit a user


		$locationProvider.html5Mode(true);

	});


//angular.module('paranormalApp' ['ngRoute'])
// 	.config(['$routeProvider', placeRoutes])
//
// function placeRoutes($routeProvider){
// 	$routeProvider.
//       when('/places', {
//         templateUrl: 'partials/places-list.html',
//         controller: 'placesController',
//         controllerAs: 'placesCtrl'
//       }).
//       when('/places/:placeId', {
//         templateUrl: 'partials/place-detail.html',
//         controller: 'placeDetailController',
//         controllerAs: 'placeDetailCtrl'
//       }).
//       otherwise({
//         redirectTo: '/places'
// //       });
// // }

// .config(function($routeProvider, $locationProvider) {

// 	$routeProvider

// 		// route for the home page
// 		.when('/', {
// 			templateUrl : 'partials/places-list.html',
// 			controller: 'placesController',
// 			controllerAs: 'placesCtrl'
// 		})

// 		// login page
// 		.when('/login', {
// 			templateUrl : 'partials/login.html',
//    			controller  : 'mainController',
//     			controllerAs: 'login'
// 		})

// 		// show all users
// 		.when('/users', {
// 		templateUrl: 'app/views/pages/users/all.html',
// 		controller: 'userController',
// 		controllerAs: 'user'
// 		})


// 		// form to create a new user
// 		// same view as edit page


// 		// page to edit a user


// 	$locationProvider.html5Mode(true);

// });
