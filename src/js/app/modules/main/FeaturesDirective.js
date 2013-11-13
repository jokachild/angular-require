/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module",
    "text!./FeaturesDirective.tpl"
], function (module, tpl) {

    module.directive("features", function () {
        return {
            restrict: "E",
            scope: {
                features: "=fs"
            },
            template: tpl,
            link: function (scope, element, attrs) {
                //
            }
        };
    });

});