/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/home/HomeCtrl"], function () {

    describe("Unit: HomeCtrl", function () {
        var $scope = null,
            ctrl = null;

        var mockService = {
            features: [
                {name: "AngularJS"}
            ]
        };

        beforeEach(function () {
            module("app");
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller("HomeCtrl", {
                    $scope: $scope,
                    CommonService: mockService
                });
            });
        });

        it("should have features", function () {
            expect($scope.features).not.toBeUndefined();
            expect($scope.features).not.toBeNull();
            expect($scope.features.length).toEqual(1);
        });

    });

});