"use strict";
var router_1 = require('@angular/router');
var puzzle_component_1 = require('./puzzle/puzzle.component');
var my_maps_project_component_1 = require('./my-maps-project/my-maps-project.component');
var routes = [
    {
        path: 'puzzle',
        component: puzzle_component_1.PuzzleComponent
    },
    {
        path: 'map',
        component: my_maps_project_component_1.MyMapsProjectComponent
    },
    {
        path: '',
        redirectTo: '/puzzle',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map