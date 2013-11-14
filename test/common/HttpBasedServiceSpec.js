/**
 * Created by amyroniuk on 11/13/13.
 */

define(["app/common/services/HttpBasedService"], function () {

    describe("Unit: HttpBasedService", function () {
        var svc, httpBackend;

        beforeEach(function () {
            module("app");
            inject(function ($httpBackend, HttpBasedService) {
                svc = HttpBasedService;
                httpBackend = $httpBackend;
            });
        });

        afterEach(function () {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it("should send a message and return the response", function () {

            var returnData = "Hello";

            httpBackend.expectGET("js/app/mocks/features.json?msg=Hi").respond(returnData);

            var test = {
                handler: function () {}
            };
            spyOn(test, "handler");

            var returnedPromise = svc.sendMessage("Hi");
            returnedPromise.then(test.handler);

            httpBackend.flush();

            expect(test.handler).toHaveBeenCalledWith(returnData);
        });

    });

});