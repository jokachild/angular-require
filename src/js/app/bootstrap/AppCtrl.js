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

        $scope.observable = "default";
        $scope.observer = "";

        $scope.$watch("observable", function (value) {
            $scope.observer = value + " intercepted";
        });

        // Added for testing
        $scope.retrieveSomeResource = function () {
            return config.someAsyncCall($scope.observable);
        };
    });

});