/**
 * Created by amyroniuk on 11/15/13.
 */

define([
    "../../app"
], function (app) {

    app.factory("FeaturesResource", function (ResourceFactory) {

        return ResourceFactory.create("features");

    });

});