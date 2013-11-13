/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "text!./main.tpl"
], function (angular, mainTpl) {

    return angular.module("app.main", [], null)
        .config(function ($routeProvider) {
            $routeProvider.when("/main", {
                template: mainTpl,
                controller: "MainCtrl"
            });
        });
});