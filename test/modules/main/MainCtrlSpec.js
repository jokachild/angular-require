/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/main/MainCtrl"], function () {

    describe("Unit: MainCtrl", function () {
        var $scope = null,
            ctrl = null,
            mockService,
            d;

        beforeEach(function () {
            module("app");
            inject(function ($rootScope, $controller, $q) {
                d = $q.defer();
                mockService = {
                    getAllInOne: function () {
                        return d.promise;
                    }
                };

                $scope = $rootScope.$new();
                ctrl = $controller("MainCtrl", {
                    $scope: $scope,
                    MultipleCallsService: mockService
                });
            });
        });

        it("should have features", function () {
            d.resolve({
                features: [
                    {"name": "AngularJS (resource)"},
                    {"name": "RequireJS (resource)"}
                ],
                version: [
                    {"name": "V1"},
                    {"name": "V2"}
                ]
            });
            $scope.$digest();
            expect($scope.features).not.toBeUndefined();
            expect($scope.features).not.toBeNull();
            expect($scope.features.length).toEqual(2);
        });

    });

});