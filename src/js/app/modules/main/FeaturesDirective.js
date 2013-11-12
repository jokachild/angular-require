/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.directive("features", function () {
        return {
            restrict: "E",
            scope: {
                features: "=fs"
            },
            templateUrl: "js/app/modules/main/FeaturesDirective.tpl",
            link: function (scope, element, attrs) {
                //
            }
        };
    });

});