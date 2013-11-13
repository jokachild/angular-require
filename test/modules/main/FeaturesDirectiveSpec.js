/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/modules/main/FeaturesDirective"], function () {

    describe("Unit: FeaturesDirective", function () {
        var scope, elem, compile, html;

        beforeEach(function () {
            module("app");

            html = '<features fs="features"></features>';

            inject(function ($compile, $rootScope) {
                scope = $rootScope.$new();
                elem = angular.element(html);
                compile = $compile(elem);
                compile(scope);
                scope.$digest();
            });
        });

        it("should display list of features", function () {
            scope.features = [
                {name: "AngularJS"},
                {name: "RequireJS"}
            ];
            scope.$digest();
            expect(elem.find("li").length).toBe(2);
        });

    });

});