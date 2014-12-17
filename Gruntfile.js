module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
  		jshint: {
    		all: ['Gruntfile.js', 'parser.js']
  		}
	});

	//Loading jshint task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task
  	grunt.registerTask('default', ['jshint']);
};