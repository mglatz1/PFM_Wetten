angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('AppCtrl', function($scope) {

	// Form data for the login modal
	$scope.loginData = {};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
  
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    //$timeout(function() {
    //  $scope.closeLogin();
    //}, 1000);
	
	alert('Willkommen ' + $scope.loginData.username + '\nDein Passwort lautet ' + $scope.loginData.password);
	};
	
	
	
	
	// Form data for the login modal
	$scope.registerData = {};

	// Perform the login action when the user submits the login form
	$scope.doRegister = function() {
  
    console.log('Doing register', $scope.registerData);
	
	
	if($scope.registerData.email === undefined || $scope.registerData.username === undefined || $scope.registerData.password === undefined || $scope.registerData.password2 === undefined) {
		alert('Du musst alles ausfuellen!');
		//$scope.alert = "Du musst alles ausfuellen!";
		// pw reset
		$scope.registerData.password = $scope.registerData.password2 = "";
	}
		
	else {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		if(re.test($scope.registerData.email))
		{		
			if ($scope.registerData.password == $scope.registerData.password2) {
				//redirect + field reset
				$scope.registerData = undefined;
				window.document.location.href = "#/app/gruppe";
			}
			
			else {
				alert('Passwoerter sind nicht gleich');
				//pw reset
				$scope.registerData.password = $scope.registerData.password2 = "";
			}
		}
	
		else
			alert('Gib eine richtige Email Adresse ein!');
	}
	};
	
	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



