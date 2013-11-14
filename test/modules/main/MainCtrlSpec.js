/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/main/MainCtrl"], function () {

    describe("Unit: MainCtrl", function () {
        var $scope = null,
            ctrl = null;

        var mockService = {
            getFeatures: function (x) {
                return [
                    {name: "AngularJS"},
                    {name: "RequireJS"}
                ];
            }
        };

        beforeEach(function () {
            module("app");
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller("MainCtrl", {
                    $scope: $scope,
                    MainLocalService: mockService
                });
            });
        });

        it("should have features", function () {
            expect($scope.features).not.toBeUndefined();
            expect($scope.features).not.toBeNull();
            expect($scope.features.length).toEqual(2);
        });

    });

});