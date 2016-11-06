(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope', 'SignUpService'];
function SignUpController($scope, SignUpService) {

  // var defaultForm = {
  //     firstname : "Matthew",
  //     lastname : "Smith",
  //     email: "Matt.Smith@Nowhere.com",
  //     tel:  "+65 8767 3838",
  //     dish : "A4"
  // }

  var defaultForm = {
      firstname : "",
      lastname : "",
      email: "",
      tel:  "",
      dish : ""
  }

  $scope.saved = false;

  $scope.user = angular.copy(defaultForm);

  $scope.saveSignUp = function() {
    SignUpService.setUser($scope.user);

    $scope.signupform.$setPristine();
    $scope.signupform.$setUntouched();
    $scope.user = angular.copy(defaultForm);
    $scope.saved = true;
  };
}


})();
