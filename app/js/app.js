'use strict';


// Declare app level module which depends on filters, and services
angular.module('powerApp', [
  'ngRoute',
  //'ngAnimate',
  'powerApp.filters',
  'powerApp.services',
  'powerApp.directives',
  'powerApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'Dashboard'});
  $routeProvider.when('/preferences', {templateUrl: 'partials/preferences.html', controller: 'Preferences'});
  $routeProvider.when('/maintenance', {templateUrl: 'partials/maintenance.html', controller: 'Maintenance'});
  $routeProvider.when('/light', {templateUrl: 'partials/light.html', controller: 'Light'});
  $routeProvider.when('/co2', {templateUrl: 'partials/co2.html', controller: 'CO2'});
  //$routeProvider.when('/fertilizer', {templateUrl: 'partials/fertilizer.html', controller: 'Fertilizer'});
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
