/**
 * Created by amyroniuk on 11/15/13.
 */

define([
    "../../app"
], function (app) {

    app.factory("ResourceFactory", function ($http) {
        var url;

        var Resource = function (data) {
            angular.extend(this, data);
        };

        Resource.query = function () {
            return $http.get(url).then(function (response) {
                return new Resource(response.data);
            });
        };

        Resource.save = function (data) {
            return $http.post(url, data).then(function (response) {
                return new Resource(response.data);
            });
        };

        Resource.prototype.$save = function () {
            return Resource.save(this);
        };

        return {
            create: function (name) {
                url = "js/app/mocks/" + name + ".json";
                return Resource;
            }
        };
    });

});