/**
 * Created by amyroniuk on 11/14/13.
 */

define([
    "./module"
], function (module) {

    module.service("MultipleCallsService", function ($http, $q) {

        this.getAll = function () {
            var deferred = $q.defer();
            $http.get("js/app/mocks/features.json").then(function (result) {
                var features = result.data;
                $http.get("js/app/mocks/versions.json").then(function (result) {
                    var versions = result.data;
                    deferred.resolve({
                        features: features,
                        versions: versions
                    });
                });
            });
            return deferred.promise;
        };

        this.getAllInOne = function () {
            return $q.all([
                $http.get("js/app/mocks/features.json"),
                $http.get("js/app/mocks/versions.json")
            ])
                .then(function (results) {
                    return {
                        features: results[0].data,
                        versions: results[1].data
                    };
                });
        };

    });

});