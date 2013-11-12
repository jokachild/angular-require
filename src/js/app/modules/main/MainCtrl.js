/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module",
    "./MainLocalService",
    "./FeaturesDirective"
], function (module) {

    module.controller("MainCtrl", function ($scope, config, MainLocalService) {
        $scope.features = MainLocalService.getFeatures();
        $scope.version = config.version;
    });

});