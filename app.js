var app = angular.module('ninjaStar', []);

app.controller('ninjaStarController', function($scope){
    $scope.comics = [
        {
            title: "The Summons IV",
            date : "03.22.2013",
            href : "2013-03-22.jpg"
        },
        {
            title: "A Trombone Interlude",
            date : "03.15.2013",
            href : "2013-03-15.jpg"
        },
        {
            title: "The Summons III",
            date : "03.08.2013",
            href : "2013-03-08.jpg"
        },
        {
            title: "The Summons II",
            date : "03.01.2013",
            href : "2013-03-01.jpg"
        },
        {
            title: "The Summons I",
            date : "02.22.2013",
            href : "2013-02-22.jpg"
        }
    ];
});