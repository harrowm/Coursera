(function () {
"use strict";


angular.module('public')
.directive('validMenuItem', validMenuItem);

validMenuItem.$inject = ['$http', '$q', 'ApiPath'];
function validMenuItem($http, $q, ApiPath) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.validMenuItem = function(modelValue, viewValue) {
        return $http.get(ApiPath + '/menu_items/' + modelValue.toUpperCase() + '.json')
          .then(function(response) {
            scope.menuItem = response.data;
            return true;
          }, function() {
            scope.menuItem = {};
            return $q.reject('No such dish');
          });
      };
    }
  };
};

})();
