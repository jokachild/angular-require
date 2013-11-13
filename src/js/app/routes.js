/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./app"
], function (app) {

    app.config(function ($routeProvider) {

        $routeProvider.otherwise({
            redirectTo: "/home"
        });

    });

});