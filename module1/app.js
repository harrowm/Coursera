(function () {

'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    function isNotEmpty(s) {
        if (s==null || s.trim().length==0) {
          return false;
        } else {
          return true;
        }
    }

    $scope.message = {type: "none", txt: "none"};

    $scope.checkLunch = function () {
      if (isNotEmpty($scope.lunchItems)) {
          // create an array of non empty items
          var i = $scope.lunchItems.split(",").filter(isNotEmpty);

          switch (i.length) {
            case 0:
              // catch input of the form ",,,"
              $scope.message={type:"error", txt:"Please enter data first"};
              break;
            case 1:
            case 2:
            case 3:
              $scope.message={type:"warn", txt:"Enjoy!"};
              break;
            default:
              $scope.message={type:"warn", txt:"Too much!"};
          }
      } else {
        $scope.message={type:"error", txt:"Please enter data first"};
      }
    }
};

})();
