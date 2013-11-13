/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "text!./home.tpl"
], function (angular, homeTpl) {

    return angular.module("app.home", [], null)
        .config(function ($routeProvider) {
            $routeProvider.when("/home", {
                template: homeTpl,
                controller: "HomeCtrl"
            });
        });
});