const PORT = 35729;
// const PORT = 8001;
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
        autoprefixer : {
            options : {
                browsers : ['ie 10','opera 39', 'firefox 49', 'safari 10'],
            },
            css : {
                files : [{
                    expand : true,
                    cwd : STYLES + 'css',
                    src : ['*.css'],
                    dest : STYLES + 'css/build',
                    ext : '.css',                  
                }],
            },
        },
        watch : {
        	scss : {
        		files : [STYLES + 'scss/*.scss'],
        		tasks : ['sass:scss'],
        	},
            autoprefixer : {
                files : [STYLES + 'css/*.css'],
                tasks : ['autoprefixer:css'],
            },
            // connect : {
            //     files : [
            //         __dirname + '/views/*.pug',
            //         STYLES + 'css/*.css',
            //     ],
            // },
            // options : {
            //     livereload : true,
            // }
        },
        /*connect : {
            server : {
                options : {
                    hostname : 'localhost',
                    port : PORT,
                    base : '.',
                    livereload : true,
                    open : true,
                    // keepalive : true,
                },
            },
        },*/
    });

  // Load the plugin that provides the "uglify" task.
    
    // grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

  // Default task(s)
    grunt.registerTask('default', ['autoprefixer','sass',/*'connect',*/'watch']);
};