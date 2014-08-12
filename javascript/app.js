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

app.controller("LoginCtrl", function($scope){
	$scope.formValues = {};
})

app.controller('SignupCtrl', function($scope){
	$scope.formValues = {};
	$scope.formValues.isInValidFirstName = 'false';
	$scope.checkIfFirstNameIsInValid = function(ngModelController){
		if(ngModelController.$pristine){
			$scope.formValues.isInValidFirstName = 'true';
		}
	}
	// console.log($scope.signupValues.fullName);
})