module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        files: {
          'assets/js/main.min.js': ['components/zepto/zepto.min.js','src/js/main.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'assets/js/**/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'assets/css/screen.css': 'assets/sass/main.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        options: {
          livereload: false // prevents page refresh on css update
        },
        files: ['assets/sass/**/*.scss'],
        tasks: ['sass']
      },
      css: {
        files: ['assets/css/screen.css'],
        tasks: []
      },
      js: {
        files: ['src/js/**/*.js', 'src/js/*.js', 'test/*.js'],
        tasks: ['uglify', 'qtest']
      },
    },
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['server']);
  grunt.registerTask('build', [ 'jshint', 'sass', 'uglify:build' ]);
  grunt.registerTask('server', ['build', 'watch' ]);
  grunt.registerTask('qtest', ['simplemocha', 'mocha']);
  grunt.registerTask('test', ['build', 'qtest']);
  // grunt.registerTask('watch', ['server']);
};