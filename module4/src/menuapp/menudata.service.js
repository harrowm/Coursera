(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('dbURL', 'https://davids-restaurant.herokuapp.com/');

MenuDataService.$inject = ['$http', 'dbURL'];
function MenuDataService($http, dbURL) {
  var service = this;

  service.getAllCategories = function() {
    return $http.get(dbURL+'categories.json');
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      url: dbURL+'menu_items.json',
      method: "GET",
      params: {category: categoryShortName}
    });
  };
}

})();
