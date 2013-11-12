/**
 * Created by amyroniuk on 11/12/13.
 */

requirejs.config({

    baseUrl: "./js",

    paths: {
        angular: "lib/angular",
        ngRoute: "lib/angular-route",
        almond: "lib/almond"
    },

    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"],
            exports: "ngRoute"
        }
    }

});

require(["app/bootstrap"]);
