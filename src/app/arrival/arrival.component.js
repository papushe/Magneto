"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArrivalComponent = (function () {
    function ArrivalComponent(apiService) {
        this.apiService = apiService;
        this.isSelectedDifined = false;
        this.onMixSelect = new core_1.EventEmitter();
    }
    ArrivalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllMixes()
            .then(function (mixes) {
            _this.allMixes = mixes;
        });
        this.apiService.getRandomTracks(7)
            .then(function (tracks) {
            _this.randomTracks = tracks;
            _this.selectedTrack = _this.randomTracks[0];
            _this.isSelectedDifined = true;
        });
    };
    ArrivalComponent.prototype.onSelect = function (selectedMix) {
        this.apiService.selectedMix = selectedMix;
    };
    return ArrivalComponent;
}());
__decorate([
    core_1.Output()
], ArrivalComponent.prototype, "onMixSelect", void 0);
ArrivalComponent = __decorate([
    core_1.Component({
        selector: 'app-arrival',
        templateUrl: 'arrival.component.html',
        styleUrls: ['arrival.component.css']
    })
], ArrivalComponent);
exports.ArrivalComponent = ArrivalComponent;
