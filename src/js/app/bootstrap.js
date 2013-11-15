/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "./app",
    "text!./bootstrap/layout.tpl",
    "./common/services/CommonService",
    "./common/services/FeaturesService",
    "./common/services/HttpBasedService",
    "./common/services/MultipleCallsService",
    "./common/services/ResourceFactory",
    "./common/services/FeaturesResource",
    "./routes"
], function (angular, app, layout) {

    angular.element(document.body).html(layout);
    angular.bootstrap(document, [app.name]);

});