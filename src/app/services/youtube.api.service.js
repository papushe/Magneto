"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Haimov on 18/06/2017.
 */
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var YouTubeApiService = (function () {
    function YouTubeApiService(_http, _youTubeService) {
        this._http = _http;
        this._youTubeService = _youTubeService;
        this.youTubeBaseUrl = 'https://www.googleapis.com/youtube/v3/search';
        this.youTubeToken = 'AIzaSyCm66pNC3bikA2ReKuaOXGl0WF_0Xw31_Q';
    }
    return YouTubeApiService;
}());
YouTubeApiService = __decorate([
    core_1.Injectable()
], YouTubeApiService);
exports.YouTubeApiService = YouTubeApiService;
