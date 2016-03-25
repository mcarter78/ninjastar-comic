app.controller('ninjaStarController', function($scope){
  console.log('controller loaded');
  $scope.comics = [];
  $scope.getAll = function() {
    $http
      .get('/comics')
      .then(function(res) {
        $scope.comics = res.data;
      });
  };
});
