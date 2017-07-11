module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        src: '../javascripts/**/*.js',
        dest: '../dist/app.js'
      },
      options: {
        transform: ['hbsfy'],
        browserifyOptions: {
          paths: ["./node_modules"]
        }
      }
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console"],
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      hbs: {
        files: ['../templates/**/*.hbs']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};