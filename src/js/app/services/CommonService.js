/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "./module"
], function (module) {

    module.service("CommonService", function () {
        this.features = [
            {name: "AngularJS (common)"},
            {name: "RequireJS (common)"}
        ];
    });

});