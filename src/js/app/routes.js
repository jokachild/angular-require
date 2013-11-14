/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./app"
], function (app) {

    app.config(function ($routeProvider, $httpProvider) {

        $routeProvider.otherwise({
            redirectTo: "/home"
        });

        $httpProvider.defaults.headers.common = {
            "X-ticket": "__x-ticket"
        };

    });

});