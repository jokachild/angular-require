/**
 * Created by amyroniuk on 11/12/13.
 */

requirejs.config({

    baseUrl: "./js",

    paths: {
        angular: "lib/angular",
        ngResource: "lib/angular-resource",
        ngRoute: "lib/angular-route",
        ngMocks: "lib/angular-mocks",
        almond: "lib/almond",
        text: "lib/text"
    },

    shim: {
        angular: {
            exports: "angular"
        },
        ngResource: {
            deps: ["angular"],
            exports: "ngResource"
        },
        ngRoute: {
            deps: ["angular"],
            exports: "ngRoute"
        },
        ngMocks: {
            deps: ["angular"],
            exports: "ngMocks"
        }
    }

});

require(["app/bootstrap"]);
