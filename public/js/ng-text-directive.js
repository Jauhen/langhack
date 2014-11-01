define(['app', 'config'], function (app) {

  'use strict';

  app.directive('ngTransText', ['config', '$route', function (config, $route) {

    return {
      restrict: 'AE',
      transclude: false,
      link: function(scope, element) {
        element[0].innerHTML = config[$route.current.lang][element[0].innerHTML];
      }
    }

  }]);

});