define(['app', 'config'], function (app) {

    'use strict';

    app.controller('PageController', ['$scope', 'config', '$route',
      function ($scope, config, $route) {

        $scope.foo = config[$route.current.lang][config.foo];

    }]);

});