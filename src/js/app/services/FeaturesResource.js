/**
 * Created by amyroniuk on 11/15/13.
 */

define([
    "./module"
], function (module) {

    module.factory("FeaturesResource", function (ResourceFactory) {

        return ResourceFactory.create("features");

    });

});