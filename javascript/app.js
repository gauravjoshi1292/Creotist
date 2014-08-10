var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: "partials/login.html"
		})
		.otherwise({
			redirectTo: "/"
		});
});


app.controller('SignupCtrl', function($scope){
	$scope.signupValues = {};
	$scope.signupValues.fullName = "";
	console.log($scope.signupValues.fullName);
})