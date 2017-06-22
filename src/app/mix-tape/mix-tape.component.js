"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MixTapeComponent = (function () {
    function MixTapeComponent(apiService) {
        this.apiService = apiService;
    }
    MixTapeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getRandomMixes(4)
            .then(function (mixes) {
            _this.relatedMixes = mixes;
            // console.log(this.allMixes);
            _this.selectedMixName = _this.apiService.selectedMix || _this.relatedMixes[3];
            _this.apiService.getTracksByMixName(_this.selectedMixName.mix_name)
                .then(function (tracks) {
                _this.selectedTracks = tracks;
            });
        });
    };
    return MixTapeComponent;
}());
MixTapeComponent = __decorate([
    core_1.Component({
        selector: 'app-mix-tape',
        templateUrl: './mix-tape.component.html',
        styleUrls: ['./mix-tape.component.css']
    })
], MixTapeComponent);
exports.MixTapeComponent = MixTapeComponent;
