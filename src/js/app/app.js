/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "ngRoute",
    "./config",
    "./modules/home/index"
], function (angular) {

    return angular.module("app", [
        "ngRoute",
        "app.constants",
        "app.home"
    ], null);

});