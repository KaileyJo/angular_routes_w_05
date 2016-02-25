var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/mononoke', {
            templateUrl: '/views/templates/mononoke.html',
            controler: 'MononokeController'
        })
        .when('/korra', {
            templateUrl: '/views/templates/korra.html',
            controler: 'KorraController'
        })
        .when('/midna', {
            templateUrl: '/views/templates/midna.html',
            controler: 'MidnaController'
        })
        .otherwise({
            redirectTo: 'korra'
        });
}]);