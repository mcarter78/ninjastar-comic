var app = angular.module('ninjaStar', []);

app.controller('ninjaStarController', function($scope){
    $scope.comics = [
        {
            title: "The Summons IV",
            date : "03-22-13",
            href : "/img/2013-03-22.jpg"
        }    
    ];
});