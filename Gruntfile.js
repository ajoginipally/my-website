module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json');

    connect: {
      server: {
        options: {
          livereload: true,
          base: 'src/',
          port: 9009
        }
      }
      watch: {
        html: {
          
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

};
