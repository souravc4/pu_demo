app.controller("worldCtrl", function ($scope, $timeout) {
	$scope.gmtValue = 5.3;
	$scope.timef = function(t) {
		$scope.toggle = true;
		$timeout(function(){
			$scope.gmtValue = t;
			$scope.toggle = false;
		}, 710);
	}
	/*var liarray = document.getElementsByClassName("headmenu");
	liarray[0].className += " activeX";*/
});

app.controller("nameCtrl", function ($scope) {
	$scope.languages = ["English", "Indian", "Chinese", "Spanish","German"];
	$scope.gen = function(){
		$.getJSON('data.json', function(data) {
			var i,j,n;
			function randInteger(min,max){
				return Math.floor(Math.random()*(max-min+1))+min;
			}
			if($scope.selectedLang=="English"){
				var names = data.english;
				var l = names.length;
				var array = [];
				j=0;
				for(i=0;i<l;i++)
				{
					if(((names[i].charAt(0)).toUpperCase())==(($scope.letter).toUpperCase()))
					{
						array[j] = names[i];
						j++;
					}
				}
				n = randInteger(0,(array.length)-1);
				$('#rname').html('\"'+array[n]+'\"');
			}
			else if($scope.selectedLang=="Indian"){
				var names = data.hindi;
				var l = names.length;
				var array = [];
				j=0;
				for(i=0;i<l;i++)
				{
					if(((names[i].charAt(0)).toUpperCase())==(($scope.letter).toUpperCase()))
					{
						array[j] = names[i];
						j++;
					}
				}
				n = randInteger(0,(array.length)-1);
				$('#rname').html('\"'+array[n]+'\"');
			}
			else if($scope.selectedLang=="Chinese"){
				var names = data.chinese;
				var l = names.length;
				var array = [];
				j=0;
				for(i=0;i<l;i++)
				{
					if(((names[i].charAt(0)).toUpperCase())==(($scope.letter).toUpperCase()))
					{
						array[j] = names[i];
						j++;
					}
				}
				n = randInteger(0,(array.length)-1);
				$('#rname').html('\"'+array[n]+'\"');
			}
			else if($scope.selectedLang=="Spanish"){
				var names = data.spanish;
				var l = names.length;
				var array = [];
				j=0;
				for(i=0;i<l;i++)
				{
					if(((names[i].charAt(0)).toUpperCase())==(($scope.letter).toUpperCase()))
					{
						array[j] = names[i];
						j++;
					}
				}
				n = randInteger(0,(array.length)-1);
				$('#rname').html('\"'+array[n]+'\"');
			}
			else if($scope.selectedLang=="German"){
				var names = data.german;
				var l = names.length;
				var array = [];
				j=0;
				for(i=0;i<l;i++)
				{
					if(((names[i].charAt(0)).toUpperCase())==(($scope.letter).toUpperCase()))
					{
						array[j] = names[i];
						j++;
					}
				}
				n = randInteger(0,(array.length)-1);
				$('#rname').html('\"'+array[n]+'\"');
			}
		});
	};
});

