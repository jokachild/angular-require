/**
 * Created by amyroniuk on 11/14/13.
 */

define([
    "./module"
], function (module) {

    module.service("FeaturesService", function ($resource, $q) {
        var Features = $resource("js/app/mocks/features.json", {}, {
            getFeatures: {
                method: "GET",
                isArray: true
            }
        });
        Features.prototype.getNameInUpperCase = function () {
            return angular.uppercase(this.name);
        };
        return Features;
    });

});