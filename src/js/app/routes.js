/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./app"
], function (app) {

    app.config(function ($routeProvider) {

        $routeProvider.when("/home", {
            templateUrl: "js/app/modules/home/home.tpl",
            controller: "HomeCtrl"
        });

        $routeProvider.otherwise({
            redirectTo: "/home"
        });

    });

});