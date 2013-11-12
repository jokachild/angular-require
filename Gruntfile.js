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
        }

    });

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("default", ["requirejs"]);

};