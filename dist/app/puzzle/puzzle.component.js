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
var PuzzleComponent = (function () {
    function PuzzleComponent() {
    }
    PuzzleComponent.prototype.ngOnInit = function () {
        this.switch1Num = Math.round(Math.random());
        this.switch2Num = Math.round(Math.random());
        this.switch3Num = Math.round(Math.random());
        this.switch4Num = Math.round(Math.random());
        console.log(this.switch1Num, this.switch2Num, this.switch3Num, this.switch4Num);
    };
    PuzzleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-puzzle',
            templateUrl: 'puzzle.component.html',
            styleUrls: ['puzzle.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PuzzleComponent);
    return PuzzleComponent;
}());
exports.PuzzleComponent = PuzzleComponent;
//# sourceMappingURL=puzzle.component.js.map