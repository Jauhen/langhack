define(['app', 'pageController', 'textDirective'], function (app) {

    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: './templates/page.html',
                controller: 'PageController',
                lang: 'en'
            }).
            when('/ru', {
              templateUrl: './templates/page.html',
              controller: 'PageController',
              lang: 'ru'
            }).
            otherwise({
              redirectTo: '/'
            });;

    }]);
});
