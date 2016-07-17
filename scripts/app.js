
// create our angular app and inject ui.bootstrap
angular.module('SPXISDEMO',[])

.controller('userController', function($scope,$http) {
  var APIURL='http://api.randomuser.me/?results=12&seed=spxis&page=';
  // Array  of Userlist
  $scope.usersList = [];
  $scope.currentPage=1;
  $scope.isLoading=false;
  $scope.loading='Load More...';
  $scope.loadUsers = function(){
  	$scope.isLoading=true;
  	$scope.loading='Loading...';
  	$http.get(APIURL+$scope.currentPage)
  		.then(function(response){
  			$scope.usersList.push.apply($scope.usersList, response.data.results);
  			$scope.currentPage++;
  			$scope.loading='Load More...';
  		});
  };
  //first call so 10 user will show in starting
  $scope.loadUsers();
  
});