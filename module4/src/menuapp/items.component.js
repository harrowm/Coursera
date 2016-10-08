(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/itemlistcomponent.template.html',
  bindings: {
    items: '<'
  }
});

})();
