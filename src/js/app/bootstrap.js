/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "angular",
    "./app",
    "./common/services/CommonService",
    "./routes"
], function (angular, app) {

    angular.bootstrap(document, [app.name]);

});