var app = angular.module('nApp', ['ngRoute', 'ds.clock', 'ngAnimate']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "world.htm",
        controller : "worldCtrl"
    })
    .when("/ngen", {
        templateUrl : "name.htm",
        controller : "nameCtrl"
    });
});