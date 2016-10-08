(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categorylistcomponent.template.html',
  bindings: {
    items: '<'
  }
});

})();
