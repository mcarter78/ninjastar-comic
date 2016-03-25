console.log('app loaded');
var app = angular.module('ninjaStar', ['ngRoute', 'ui.router']);

app.config(['$stateProvider', '$routeProvider', '$locationProvider', function($stateProvider, $routeProvider, $locationProvider) {
  console.log('config loaded');

  $stateProvider
    .state('characters', {
      url: '/characters',
      controller: 'CharactersController',
      templateUrl: 'templates/characters.html'
    })
    .state('home', {
      // controller: 'ninjaStarController',
      // controllerAs: 'ninja',
      url: '/',
      templateUrl: 'templates/welcome.html'
    })
    .state('comics', {
      url: '/comics',
      controller: 'ninjaStarController',
      controllerAs: 'ninja',
      templateUrl: 'templates/comic-list.html'
    });

    // $routeProvider.otherwise({
    //   redirectTo: '/'
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

app.controller('ninjaStarController', function($scope, $http){
  console.log('ninjaStarController loaded');
  $scope.comics = [];
  $scope.getAll = function() {
    console.log('getAll called');
    $http
      .get('/api/comics')
      .then(function(res) {
        console.log(res.data);
        $scope.comics = res.data;
      });
  };
  $scope.getAll();
});

app.controller('CharactersController', function($scope){
  console.log('CharactersController loaded');
  $scope.characters = [
    {
      name: "Hoshi",
      image: "hoshi.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
    },
    {
      name: "Kage",
      image: "kage.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
    },
    {
      name: "Torah",
      image: "torah.jpg",
      bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat."
    }
  ];
});
