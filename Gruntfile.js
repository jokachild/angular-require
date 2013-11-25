module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        requirejs: {
            compile: {
                options: {
                    uglify2: {
                        mangle: false
                    },
                    optimize: "uglify2",
                    baseUrl: "src/js",
                    mainConfigFile: "src/js/main.js",
                    name: "lib/almond",
                    include: ["main"],
                    out: "dist/app.js"
                }
            }
        },

        compass: {
            compile: {
                options: {
                    sassDir: "src/scss",
                    cssDir: "src/css",
                    noLineComments: true
                }
            }
        },

        watch: {
            compass: {
                files: ["src/scss/**/*.scss"],
                tasks: ["compass"]
            }
        }

    });

    require("load-grunt-tasks")(grunt);
    //grunt.loadNpmTasks("grunt-contrib-requirejs");
    //grunt.loadNpmTasks("grunt-contrib-compass");
    //grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["requirejs"]);

};