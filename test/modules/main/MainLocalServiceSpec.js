/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/main/MainLocalService"], function () {

    describe("Unit: MainLocalService", function () {
        var _MainLocalService;

        beforeEach(function () {
            module("app", function ($provide) {
                var mockService = {
                    features: [
                        {name: "AngularJS"},
                        {name: "RequireJS"}
                    ]
                };
                $provide.value("CommonService", mockService);
            });
            inject(function (MainLocalService) {
                _MainLocalService = MainLocalService;
            });
        });

        it("should exist", function () {
            expect(_MainLocalService).not.toBeNull();
            expect(_MainLocalService).not.toBeUndefined();
        });

        it("should contain array of features", function () {
            expect(_MainLocalService.getFeatures().length).toEqual(2);
        });

    });

});