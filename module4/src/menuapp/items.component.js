(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/itemdetail.template.html',
  bindings: {
    items: '<'
  }
});

})();
