/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.service("MainLocalService", function (CommonService) {
        var features = angular.copy(CommonService.features);
        for (var i = 0; i < features.length; i++) {
            features[i]["name"] += " (main)";
        }
        this.getFeatures = function () {
            return features;
        };
    });

});