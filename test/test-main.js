/**
 * Created by amyroniuk on 11/13/13.
 */

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/Spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: "base/src/js/",
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
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});