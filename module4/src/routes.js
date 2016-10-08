(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categorylist.template.html',
    controller: 'CategoryListController as list',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categories.itemlist', {
    templateUrl: 'src/menuapp/templates/itemlist.template.html',
    params: {
      itemId: null
    },
    controller: 'ItemListController as list',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
    }
  })
  ;

}

})();
