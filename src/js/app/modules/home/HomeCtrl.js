/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.controller("HomeCtrl", function ($scope, FeaturesService/*, FeaturesResource*/) {

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

        /*FeaturesResource.query().then(function (data) {
            $scope.f = data;
        });

        var model = {
            name: "Backbone"
        };

        FeaturesResource.save(model).then(function (data) {
            debugger;
        }, function (data) {
            debugger;
        });

        var feature = new FeaturesResource(model);
        feature.$save().then(function (data) {
            debugger;
        }, function (data) {
            debugger;
        });*/
    });

});