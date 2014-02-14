'use strict';

/* Filters */

angular.module('powerApp.filters', []).
	filter('int2hour', [function(num) {
		return function(num) {
			var h = pad2(Math.floor(num / 60));
			//var h = Math.floor(num / 60);
			var m = pad2(num - (h*60));
			//var m = num - (h*60);
			return h + ':' + m;
		}
	}])/*.filter('hour2int', [function(hour) {
		return function(num) {
			var tmp = num.split(':');
			var h = tmp[0];
			var m = tmp[1];
			var t = (h * 24) + (m * 60);
			return t;
	}*/;

function pad2(num) {
	return (num < 10 ? '0' : '') + num;
}

