(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
  var tbList = this;
  tbList.items = ShoppingListCheckOffService.getToBuyItems();

  tbList.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };
};


AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
  var bList = this;
  bList.items = ShoppingListCheckOffService.getBoughtItems();
};


function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {name: "cookies", quantity: 10 }, {name: "milk", quantity: 3 },
    {name: "butter", quantity: 6 }, {name: "eggs", quantity: 9 },
    {name: "flour", quantity: 1 }, {name: "bread", quantity: 2 },
    {name: "beer", quantity: 12 }
  ];
  var boughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.buyItem = function(index) {
    boughtItems.push(toBuyItems[index]);
    toBuyItems.splice(index, 1);
  }
};


})();
