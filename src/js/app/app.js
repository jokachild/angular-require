/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "ngResource",
    "ngRoute",
    "ngMocks",
    "./config",
    "./services/index",
    "./bootstrap/index",
    "./modules/home/index",
    "./modules/main/index"
], function (angular) {

    return angular.module("app", [
        "ngResource",
        "ngRoute",
        "app.constants",
        "app.services",
        "app.bootstrap",
        "app.home",
        "app.main"
    ], null);

});