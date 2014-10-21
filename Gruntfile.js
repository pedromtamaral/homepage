module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    haml: {
      dist: {
        files: {
          'dist/index.html': 'src/index.haml'
        }
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [
          {
            expand: true,
            cwd: 'assets/scss/',
            src: ['*.scss'],
            dest: 'dist/css',
            ext: '.css'
          }
        ]
      }
    },
    
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },
      haml: {
        files: ['src/*.haml'],
        tasks: ['haml'],
        options: {
          livereload: true,
        }
      },
    },
    
    imagemin: {
      options: {
        optimizationLevel: 3
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'dist/img'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-haml2html');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'haml', 'sass', 'imagemin']);
};
