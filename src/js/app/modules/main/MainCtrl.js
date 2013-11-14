/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.controller("MainCtrl", function ($scope, MultipleCallsService) {
        MultipleCallsService.getAllInOne().then(function (data) {
            $scope.features = data.features;
        });
    });

});