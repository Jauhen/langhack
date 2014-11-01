define(['app', 'en', 'ru', 'by'], function (app, en, ru, by) {

    'use strict';

    app.constant('config', {

        foo: 'World!',

        en: en,
        ru: ru,
        by: by

    });
});