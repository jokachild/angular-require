/**
 * Created by amyroniuk on 11/12/13.
 */

define([
    "../../app"
], function (app) {

    app.service("CommonService", function () {
        this.features = [
            {name: "AngularJS (common)"},
            {name: "RequireJS (common)"}
        ];
    });

});