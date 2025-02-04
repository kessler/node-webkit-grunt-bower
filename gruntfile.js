module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
    	install: {}
    }
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugin that provides the "uglify" task.
 // grunt.loadNpmTasks('grunt-contrib-uglify');
 	grunt.loadNpmTasks('grunt-bower-task');
  // Default task(s).
  grunt.registerTask('default', ['bower']);
  //grunt.registerTask('default', ['uglify']);
  //grunt.

};