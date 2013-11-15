/**
 * Created by amyroniuk on 11/14/13.
 */

define([
    "./module"
], function (module) {

    module.factory("HttpBasedService", function ($http) {
        return {
            sendMessage: function (msg) {
                return $http.get("js/app/mocks/features.json?msg=" + msg)
                    .then(function (result) {
                        return result.data;
                    });
            }
        };
    });

});