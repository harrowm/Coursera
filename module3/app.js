(function () {

'use strict';

angular.module('NarrowItDownApp', [])
 .controller('NarrowItDownController', NarrowItDownController)
 .service('MenuSearchService', MenuSearchService)
 .constant('dbURL', 'https://davids-restaurant.herokuapp.com/menu_items.json')
 .directive('foundItems', foundItemsDirective);


function foundItemsDirective() {
 var ddo = {
   templateUrl: 'foundItems.html',
   scope: {
     items: '<',
     onRemove: '&'
   },
   controller: FoundItemsDirectiveController,
   controllerAs: 'list',
   bindToController: true
 };

 return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;

  list.removeItem = function (idx) {
    list.items.splice(idx, 1);
  };
}


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

MenuSearchService.$inject = ['$http', 'dbURL'];
function MenuSearchService($http, dbURL) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    return $http
      .get(dbURL)
      .then(function (result) {
        var foundItems = [];

        if ((searchTerm != null) && (searchTerm.length > 0)) {
          var lowerSearchTerm = searchTerm.toLowerCase();
          foundItems = result.data.menu_items
          .filter(function (item) {
            return item.description.toLowerCase().indexOf(lowerSearchTerm) !== -1;
          });
        }
        return foundItems;
      });
  }
};


})();
