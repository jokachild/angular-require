/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.controller("MainCtrl", function ($scope, config) {
        $scope.features = [
            {name: "AngularJS"},
            {name: "RequireJS"}
        ];
        $scope.version = config.version;
    });

});