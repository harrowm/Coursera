(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);


ItemListController.$inject = ['items'];
function ItemListController(items) {
  var $ctrl = this;
  $ctrl.items = items.data.menu_items;
  $ctrl.categoryShortName = items.data.category.name;
}

})();
