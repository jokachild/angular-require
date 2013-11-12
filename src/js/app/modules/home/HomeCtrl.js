/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.controller("HomeCtrl", function ($scope, config, CommonService) {
        $scope.features = CommonService.features;
        $scope.version = config.version;
    });

});