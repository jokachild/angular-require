/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/home/HomeCtrl"], function () {

    describe("Unit: HomeCtrl", function () {
        var $scope = null,
            ctrl = null,
            mockService;

        beforeEach(function () {
            module("app");
            inject(function ($rootScope, $controller) {
                mockService = {
                    getFeatures: function () {
                        return [
                            {"name": "AngularJS (resource)"},
                            {"name": "RequireJS (resource)"}
                        ];
                    }
                };
                $scope = $rootScope.$new();
                ctrl = $controller("HomeCtrl", {
                    $scope: $scope,
                    FeaturesService: mockService
                });
            });
        });

        it("should have features", function () {
            $scope.$digest();
            expect($scope.features).not.toBeUndefined();
            expect($scope.features).not.toBeNull();
            expect($scope.features.length).toEqual(2);
        });

    });

});