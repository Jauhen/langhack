module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({

    express: {

      options: {
        port: 9000,
        serverreload: true
      },

      dev: {
        options: {
          bases: [
            'public',
            'public/templates' /* [1] */
          ]
        }
      },

      prod: {
        options: {
          bases: [
            '.public',
            '.public/templates' /* [1] */
          ]
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'public',
          mainConfigFile: 'public/js/main.js',
          dir: '.public',
          optimize: 'uglify',
          modules: [
            { name: 'js/main' }
          ]
        }
      }
    },

    karma: {

      options: {
        frameworks: ['mocha', 'requirejs', 'chai'],
        reporters: ['spec'],
        files: [
          { pattern: 'public/components/**/*.js', included: false },
          { pattern: 'public/js/**/*.js', included: false },
          { pattern: 'test/browser/utils.js', included: false },
          { pattern: 'test/browser/unit/**/*.js', included: false },
          'test/browser/main.js'
        ]
      },

      unit: {
        options: {
          port: 9999,
          browsers: ['PhantomJS'],
          autoWatch: false,
          singleRun: true
        }
      }

      /*integration: {
          ...
      }*/
    },

    'i18n-static': {
      src: ['public/templates/page.html'],
      options: {
        langs: ['ru', 'en']
      }
    }
  });

  grunt.registerMultiTask('i18n-static', 'Static localize ng template.', function() {


    var langs = this.options({}).langs;

    var filelist = grunt.file.expand(this.files[0].src);

    var langstrs = {};

    for (var j in langs) {
      var langfile = grunt.file.read('public/js/lang/' + langs[j] + '.js');
      langstrs[langs[j]] = eval('(' + langfile.
          replace(/^define\(/, '').
          replace(/\);/, '') + ')()');
    }

    grunt.log.writeln(JSON.stringify(langstrs));

    for (var i in filelist) {
      var file = filelist[i];
      grunt.log.writeln(file);
      var source = grunt.file.read(file);

      var reg = /<ng-trans-text>(.*?)<\/ng-trans-text>/g;

      for (var j in langs) {
        var filename = file.substr(0, file.lastIndexOf('.')) + '_' + langs[j] +
            file.substr(file.lastIndexOf('.'));
        grunt.file.write(filename, source.replace(reg,
            function(str, first) {

              return langstrs[langs[j]][first] || first;
            }));
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-karma');
};

// [1] Not using server-side controllers in order to simplify things