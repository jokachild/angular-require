/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/bootstrap/AppCtrl"], function () {

    describe("Unit: AppCtrl", function () {
        var $scope = null,
            ctrl = null;

        var mockConfig = {
            version: "v1",
            someAsyncCall: function (x) {
                return "y";
            }
        };

        beforeEach(function () {
            module("app");
            inject(function ($rootScope, $controller) {
                $scope = $rootScope.$new();
                ctrl = $controller("AppCtrl", {
                    $scope: $scope,
                    config: mockConfig
                });
            });
        });

        it("should have app config", function () {
            expect($scope.app).not.toBeUndefined();
        });

        it("should config with valid version", function () {
            expect($scope.app.version).toEqual("v1");
        });

        it("should update observer when observable is changed", function () {
            $scope.observable = "Mr.X";
            $scope.$apply();
            expect($scope.observer).toEqual("Mr.X intercepted");
        });

        it("should make asynchronous call when retrieveSomeResource is called", function () {
            var response = $scope.retrieveSomeResource();
            expect(response).toEqual("y");
        });

        it("should make call to config.someAsyncCall in retrieveSomeResource", function () {
            spyOn(mockConfig, "someAsyncCall")
                .andCallThrough()
                .andReturn("z");
            var response = $scope.retrieveSomeResource();
            expect(response).toEqual("z");
            expect(mockConfig.someAsyncCall).toHaveBeenCalled();
            expect(mockConfig.someAsyncCall).toHaveBeenCalledWith("default");
            expect(mockConfig.someAsyncCall.calls.length).toEqual(1);
        });

    });

});