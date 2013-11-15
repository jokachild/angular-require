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