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
  // var list = this;
  //
  // list.removeItem = function (idx) {
  //   list.items.splice(idx, 1);
  // };
}


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;

  menu.getItems = function() {
    MenuSearchService.getMatchedMenuItems(menu.searchTerm)
    .then(function(response) {
      menu.found = response;
    }, (function(response) {
      console.log("Something went wrong with getting menu data from the server");
    }));
  };

  menu.removeItem = function (idx) {
    menu.found.splice(idx, 1);
  };
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
