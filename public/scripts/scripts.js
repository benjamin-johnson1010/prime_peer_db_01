console.log( 'js is sourced' );

var myApp = angular.module( 'myApp', []);

var allAssignments = [];


myApp.controller('assignmentsController', ['$scope', '$http', function($scope, $http){
  console.log('NG');
  $scope.newAssignment = function(){
    console.log('in newAssignment');
    var newInput={
      assignment_number:  $scope.assignNumber,
      student_name: $scope.name,
      score:   $scope.score,
      date_completed: $scope.date
};
    this.product = newInput;

    $scope.assignNumber = null;
    $scope.name = null;
    $scope.score = null;
    $scope.date = null;
    $http({
      method: 'POST',
      url: '/assignments',
      data: newInput
    }).then(function(response){
      console.log('this is from the server', response);

      $scope.displayName = response.data.student_name;
      $scope.displayScore = response.data.score;
      $scope.displayAssignmentNumber = response.data.assignment_number;
      $scope.displayDate = response.data.date_completed.substring(0,10);

    });
  };
}]);
