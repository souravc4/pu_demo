app.controller("worldCtrl", function ($scope, $timeout) {
	$scope.gmtValue = 5.3;
	$scope.timef = function(t) {
		$scope.toggle = true;
		$timeout(function(){
			$scope.gmtValue = t;
			$scope.toggle = false;
		}, 710);
	}
	var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className += " activeX";
});

app.controller("nameCtrl", function ($scope) {
	/*$scope.msg = "I love London";*/
});

