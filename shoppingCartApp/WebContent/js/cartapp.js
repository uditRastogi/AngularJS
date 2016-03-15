var app = angular.module("myCartApp",
		[ 'ngSanitize', 'CtrlModule', 'ngRoute'], function() {
			console.log("My Cart function");
		});

app.config(function($routeProvider) {
	console.log("My Cart App Configs......");

	$routeProvider.when("/", {
		template : '<h3> Welcome to Shopping Cart Application</h3>'
	})
	.when("/cart", {
		templateUrl : 'partials/cart.html'
	})
	.when("/products", {
		templateUrl : 'partials/products.html',
		controller: "ProductController"
	})
	.when("/details/:productinfo",{
		templateUrl: 'partials/productDetails.html',
	    controller: 'DetailsController'
	})
	.when("/login",{
		templateUrl: 'partials/login.html',
		controller: 'loginController'
	})
	.when("/error",{
		template: '<h3>Invalid Credentials</h3>'
	})
	.when("/logout",{
	    templateUrl: 'partials/logout.html'
	})
	.when('/signup',{
		templateUrl :'partials/signup.html',
		controller: 'signUpController'
	})
	.otherwise("/");

});

app.run(function($rootScope) {
	console.log("My Cart App Runs......");
	$rootScope.isLogin = false;
});


app.controller("MainController", function($scope, $location,$rootScope) {
	
	$scope.$on("$locationChangeStart",function(){
	  if(!$rootScope.isLogin) {
		  
		if($location.path() == "/products"){
			$location.path("/login");
		}
		
	  }
	
	})
	
	
	$scope.$on("$locationChangeSuccess",function(){
		console.log("location change success ......" + $location.path());
		if($location.path() == "/logout"){
			$rootScope.isLogin = false;
		}
	
	})
});


app.controller("loginController", function($scope, $location, $rootScope){
	$scope.login =  function() {
		if($scope.login.userName == "admin"){
			$location.path("/products");
			$rootScope.isLogin = true;
		}else{
			$location.path("/error");
		}
	}
})

app.filter("truncate", function(){
	return function(input, limit){
		var result = (input.length > limit ? input.substr(0,limit)+"..." :input);
		
		return result;
	}
	
})


