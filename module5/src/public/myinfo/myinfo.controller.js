(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'user', 'menuItem'];
function MyInfoController(ApiPath, user, menuItem) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.user = user;
  $ctrl.menuItem = menuItem;
}

})();
