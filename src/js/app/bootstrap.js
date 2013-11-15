/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "./app",
    "text!./bootstrap/layout.tpl",
    "./routes"
], function (angular, app, layout) {

    angular.element(document.body).html(layout);
    angular.bootstrap(document, [app.name]);

});