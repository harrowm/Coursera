(function () {

'use strict';

angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService);


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var narrow = this;

  narrow.getItems = function() {
    MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
    .then(function(response) {
      narrow.found = response;
    }, (function(response) {
      console.log("Something went wrong with getting menu data from the server");
    }));
  }
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http
      .get('https://davids-restaurant.herokuapp.com/menu_items.json')
      .then(function (result) {
        // process result and only keep items that match
        var allItems = result.data.menu_items;
        var foundItems = [];

        if (searchTerm.length > 0) {
            for (var i = 0; i < allItems.length; i++) {
                if (allItems[i].description.toLowerCase().indexOf(searchTerm) >= 0) {
                    foundItems.push(allItems[i]);
                }
            }
        } else { // ensure that old list is cleared
          allItems = [];
        }

        return foundItems;
      });
  }
};


})();
