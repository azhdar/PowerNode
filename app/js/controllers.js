'use strict';

/* Controllers */

angular.module('powerApp.controllers', []).
	controller('Dashboard', [function() {

	}])
	.controller('Preferences', [function() {

	}])
	.controller('Maintenance', [function() {

	}])
	.controller('Light', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$scope.params = {
			'start' : 400,
			'end' : 1100
		}
		$scope.params.time = $scope.params.end - $scope.params.start;


		$('.bottom.light').noUiSlider({
			range: [0,1440],
			start: [$scope.params.start, $scope.params.end],
			connect: true,
			step: 5,
			margin: 1,
			slide: update
		}).change(update);

	}])
	.controller('CO2', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$scope.params = {
			'start' : 400,
			'end' : 1100
		}
		$scope.params.time = $scope.params.end - $scope.params.start;


		$('.bottom.co2').noUiSlider({
			range: [0,1440],
			start: [$scope.params.start, $scope.params.end],
			connect: true,
			step: 5,
			margin: 1,
			slide: update
		}).change(update);

	}])
	/*.controller('Fertilizer', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$scope.params = {
			'ferti1' : 400,
			'ferti2' : 400,
			'ferti3' : 1100
		}

		$('#fertilizer-1').mobiscroll({
			preset: 'time',
			theme: 'ios7',
			lang: 'fr',
			mode: 'scroller',
			display: 'inline',

		});

		$('#fertilizer-2').mobiscroll({
			preset: 'time',
			theme: 'ios7',
			lang: 'fr',
			mode: 'scroller',
			display: 'inline',

		});

		$('#fertilizer-3').mobiscroll({
			preset: 'time',
			theme: 'ios7',
			lang: 'fr',
			mode: 'scroller',
			display: 'inline',

		});
	}])*/;

	function update(e) {
		var tmp = $('.bottom').val();

		//console.log(tmp[0], tmp[1]);
		
		var dh = pad2(Math.floor(tmp[0] / 60));
		var dm = pad2(tmp[0] - (dh*60));

		var fh = pad2(Math.floor(tmp[1] / 60));
		var fm = pad2(tmp[1] - (fh*60));

		var t = tmp[1] - tmp[0];
		var th = pad2(Math.floor(t / 60));
		var tm = pad2(t - (th*60));

		console.log(dh+':'+dm+' -> '+fh+':'+fm+' = '+th+':'+tm);

		/*$scope.params = {
			'start' : tmp[0],
			'end' : tmp[1]
		}*/
	}

	function pad2(num) {
		return (num < 10 ? '0' : '') + num;
	}


