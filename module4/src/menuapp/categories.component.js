(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categorycomponent.template.html',
  bindings: {
    items: '<'
  }
});

})();
