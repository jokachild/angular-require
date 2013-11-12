/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module",
    "./MainLocalService"
], function (module) {

    module.controller("MainCtrl", function ($scope, config, MainLocalService) {
        $scope.features = MainLocalService.getFeatures();
        $scope.version = config.version;
    });

});