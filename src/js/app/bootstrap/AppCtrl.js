/**
 * Created by amyroniuk on 11/13/13.
 */

define([
    "./module"
], function (module) {

    module.controller("AppCtrl", function ($scope, config) {
        $scope.app = {
            version: config.version
        };
    });

});