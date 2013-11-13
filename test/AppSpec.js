/**
 * Created by amyroniuk on 11/13/13.
 */


define(["app/app"], function () {

    describe("Unit: App module", function () {
        var app;

        beforeEach(function () {
            app = angular.module("app");
        });

        it("should be registered", function () {
            expect(app).not.toBeNull();
            expect(app).not.toBeUndefined();
        });

        describe("Dependencies:", function () {
            var deps;
            var hasModule = function (m) {
                return deps.indexOf(m) >= 0;
            };
            beforeEach(function () {
                deps = app.requires;
            });

            it("should have ngRoute as a dependency", function () {
                expect(hasModule("ngRoute")).toEqual(true);
            });

            it("should have app.constants as a dependency", function () {
                expect(hasModule("app.constants")).toEqual(true);
            });
            it("should have app.bootstrap as a dependency", function () {
                expect(hasModule("app.bootstrap")).toEqual(true);
            });

            it("should have app.home as a dependency", function () {
                expect(hasModule("app.home")).toEqual(true);
            });

            it("should have app.main as a dependency", function () {
                expect(hasModule("app.main")).toEqual(true);
            });

        });

    });

});