/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "./app",
    "./routes"
], function (angular, app) {

    angular.bootstrap(document, [app.name]);

});