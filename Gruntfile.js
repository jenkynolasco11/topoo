const PORT = 35729;
const STYLES = 'static/styles/'

module.exports = function(grunt) {

    'use strict'; 
    // Project configuration.

    grunt.initConfig({
        sass : {
        	scss : {
        		files : [{
        			expand : true,
        			cwd : STYLES + 'scss',
        			src : ['*.scss'],
        			dest : STYLES + 'css',
        			ext : '.css',
        		}],
        	},	

        	options : {
        		outputStyle : 'expanded',
        		indendtType : 'tab',
        	},
        },
        watch : {
        	scss : {
        		files : [STYLES + 'scss/*.scss'],
        		tasks : ['sass:scss'],
        	},
            /*css : {
                files : [
                    'static/{,* /}*.{css,jpg,png}'
                    ],
                tasks : [''],
                options : {
                    livereload : PORT,
                    nospawn : true,
                },
            }*/
        },
        /*connect : {
            server : {
                options : {
                    // hostname : 'localhost',
                    port : PORT,
                    base : '.',
                    // livereload : true,
                },
            },
        },*/
    });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');

  // Default task(s)
    grunt.registerTask('default', ['sass'/*,'connect'*/,'watch']);
};