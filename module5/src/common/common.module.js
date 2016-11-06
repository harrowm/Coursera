(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://frightening-cat-36230.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
