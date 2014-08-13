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

app.directive('ngBlur', ['$parse', function($parse) {
  return function(scope, element, attr) {
    var fn = $parse(attr['ngBlur']);
    element.bind('blur', function(event) {
      scope.$apply(function() {
        fn(scope, {$event:event});
      });
    });
  }
}]);

app.controller("LoginCtrl", function($scope){
	$scope.formValues = {};
});

app.controller('SignupCtrl', function($scope){
	$scope.formValues = {};
	$scope.formValues.submitted = false;
	$scope.submitForm = function(isValid){
		$scope.formValues.submitted = true;
	}
});