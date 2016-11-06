(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath', '$q'];
function SignUpService($http, ApiPath, $q) {
  var service = this;

  var user = {firstname:"", lastname:"", email:"", tel:"", dish:""};

  service.setUser = function (user) {
    service.user = user;
  };

  // this function needs to return a promise for routing
  service.getUser = function () {
    return( $q(function(resolve, reject) {
        resolve(service.user);
    }));
  };
}

})();
