<div id="main" ng-controller="AppCtrl">
    <header>
        <h3>AngularJS + RequireJS</h3>
    </header>

    <div id="container" ng-view></div>

    <footer>
        <hr/>
        <div>Version: {{app.version}}</div>
    </footer>
</div>