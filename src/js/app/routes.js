/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./app"
], function (app) {

    app.config(function ($routeProvider, $httpProvider) {

        $routeProvider.otherwise({
            redirectTo: "/home"
        });

        $httpProvider.defaults.headers.common = {
            "X-ticket": "__x-ticket"
        };

        $httpProvider.responseInterceptors.push("retryInterceptor");

    });

    app.config(function ($provide) {

        $provide.constant("DB", "postgres");

        $provide.value("SomeAction", function () {
            console.log("some action..");
        });

        $provide.decorator("SomeAction", ["$delegate", function ($delegate) {
            var f = $delegate;
            $delegate = function () {
                console.log("before some action..");
                f();
                console.log("after some action..");
            };
            return $delegate;
        }]);

        $provide.service("SomeService", function () {
            this.simeAttr = "someVal";
        });

        $provide.factory("SomeFactory", function () {
            return {
                someAttr: "someAttrVal",
                gerSomeAttr: function () {
                    return this.someAttr;
                }
            };
        });

        $provide.provider("SomePr", function () {
            var someConfigVal = "init";
            return {
                setSomeConfigVal: function () {
                    someConfigVal = "default";
                },
                $get: function () {
                    return {
                        getSomeConfigVal: function () {
                            return someConfigVal;
                        }
                    };
                }
            };
        });
    });

    app.config(function (SomePrProvider) {
        SomePrProvider.setSomeConfigVal();
    });

    app.factory("retryInterceptor", function ($injector, $q) {

        return function (responsePromise) {
            return responsePromise.then(null, function (errResponse) {
                if (errResponse.status === 503) {
                    return $injector.get("$http")(errResponse.config);
                } else {
                    return $q.reject(errResponse);
                }
            });
        };

    });

});