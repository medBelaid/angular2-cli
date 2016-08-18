"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');
var MyMapsProjectComponent = (function () {
    function MyMapsProjectComponent() {
        this.title = 'My first angular2-google-maps project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    MyMapsProjectComponent.prototype.ngOnInit = function () {
    };
    MyMapsProjectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-my-maps-project',
            templateUrl: 'my-maps-project.component.html',
            styleUrls: ['my-maps-project.component.css'],
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MyMapsProjectComponent);
    return MyMapsProjectComponent;
}());
exports.MyMapsProjectComponent = MyMapsProjectComponent;
//# sourceMappingURL=my-maps-project.component.js.map