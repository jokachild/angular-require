/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "ngRoute",
    "ngMocks",
    "./config",
    "./bootstrap/index",
    "./modules/home/index",
    "./modules/main/index"
], function (angular) {

    return angular.module("app", [
        "ngRoute",
        "app.constants",
        "app.bootstrap",
        "app.home",
        "app.main"
    ], null);

});