define(['app', 'lang/en', 'lang/ru'], function (app, en, ru) {

    'use strict';

    app.constant('config', {

        foo: 'World!',

        en: en,
        ru: ru

    });
});