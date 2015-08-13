var app = angular.module('ninjaStar', ['ngRoute']);

app.config(function($routeProvider) {
    
        $routeProvider
            .when('/characters', {
                controller: 'ninjaStarController',
                templateUrl: 'partials/characters.html'
            })
            .when('/', {
                controller: 'ninjaStarController',
                templateUrl: 'partials/welcome.html'
            })
            .when('/comic', {
                controller: 'ninjaStarController',
                templateUrl: 'partials/comic-list.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});
