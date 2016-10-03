(function () {

'use strict';

angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService);


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var narrow = this;
  var items = null;

  narrow.getItems = function() {
    console.log("hi");
    narrow.items = MenuSearchService.getMatchedMenuItems('help');
    console.log(narrow.items);
  }
};


function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({url: ('https://davids-restaurant.herokuapp.com/menu_items.json')})
      .then(function (result) {
        // process result and only keep items that match
        var foundItems = result.data;
        console.log(foundItems);
        // return processed items
        return foundItems;
      });
  }
};


})();
