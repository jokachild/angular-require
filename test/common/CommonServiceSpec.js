/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/services/CommonService"], function () {

    describe("Unit: CommonService", function () {
        var _CommonService;

        beforeEach(function () {
            module("app.services");
            inject(function (CommonService) {
                _CommonService = CommonService;
            });
        });

        afterEach(function () {
            _CommonService = null;
        });

        it("should exist", function () {
            expect(_CommonService).not.toBeNull();
        });

        it("should contain array of features", function () {
            expect(_CommonService.features.length).toBeGreaterThan(0);
            expect(_CommonService.features[0]["name"]).not.toBeUndefined();
        });

    });

});