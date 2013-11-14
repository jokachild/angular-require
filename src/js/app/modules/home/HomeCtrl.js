/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.controller("HomeCtrl", function ($scope, FeaturesService) {

        /*$scope.analyzeFeatures = function (features) {
           angular.forEach(features, function (value, key) {
               console.log(value.getNameInUpperCase());
           });
        };*/

        $scope.features = FeaturesService.getFeatures();
        //$scope.features.$promise.then($scope.analyzeFeatures);

        //$scope.features = FeaturesService.query();

        /*FeaturesService.getFeatures(function (features) {
            $scope.features = features;
            $scope.analyzeFeatures($scope.features);
        });*/
    });

});