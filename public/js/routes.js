define(['app', 'pageController', 'textDirective'], function (app) {

    'use strict';

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: './templates/page.html?en',
                controller: 'PageController',
                lang: 'en'
            }).
            when('/ru', {
              templateUrl: './templates/page.html?ru',
              controller: 'PageController',
              lang: 'ru'
            }).
            when('/by', {
              templateUrl: './templates/page.html?by',
              controller: 'PageController',
              lang: 'by'
            }).
            otherwise({
              redirectTo: '/'
            });;

    }]);
});
