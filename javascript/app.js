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

app.controller("LoginCtrl", function($scope, $http){
	$scope.formValues = {};
	$scope.submitForm = function(){
		$http.get("../json/userData.json").then(function(data){
			$scope.userData = data.data;
			console.log(data);
			console.log($scope.userData);
		});
	}
});

app.controller('SignupCtrl', function($scope, $http){
	$scope.newUser = {};
	$scope.form = {};
	$scope.form.submitted = false;
	$scope.submitForm = function(isValid){
		$scope.form.submitted = true;

		if(isValid){
			var userData;
			$http.get("../json/userData.json").then(function(data){
				console.log(data);
				if(data.data){
					userData = data;
				}
				else{
					userData = [];
				}
				userData.push($scope.newUser);
				console.log(userData);
			});

			$http.post("../json/userData.json", userData).then(function(data){
				console.log('post', data);
			});
		}
		else {
			console.log("invalid data")
		}
	}
});