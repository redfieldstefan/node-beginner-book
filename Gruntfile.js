'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	var srcFiles = ['Gruntfile.js', 'server.js'];

	grunt.initConfig({

		jshint: {
			dev: {
				src: srcFiles
			},

			options: {
				jshintrc: true
			}
		},

		simplemocha: {
			dev:{
				src: srcFiles
			}
		},

		watch: {
			files: srcFiles,
			tasks: ['jshint:dev']
		}
	});

	grunt.registerTask('test', ['jshint:dev']);
	grunt.registerTask('default', ['test']);
};