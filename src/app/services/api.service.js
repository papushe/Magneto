"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/toPromise");
var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
        this.baseUrl = 'https://magneto-ws.herokuapp.com';
    }
    ApiService.prototype.getAllMixes = function () {
        return this._http.get(this.baseUrl + "/getAllMixes")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    ApiService.prototype.getAllTracks = function () {
        return this._http.get(this.baseUrl + "/getAllTracks")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    ApiService.prototype.getTracksByMixName = function (mixName) {
        return this._http.get(this.baseUrl + "/get/" + mixName)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    ApiService.prototype.getRandomTracks = function (trackCount) {
        return this._http.get(this.baseUrl + "/getRandomTracks/" + trackCount)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    ApiService.prototype.getRandomMixes = function (mixCount) {
        return this._http.get(this.baseUrl + "/getRandomMixes/" + mixCount)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    ApiService.prototype.convertMillisecondsToDigitalClock = function (ms) {
        var minutes, seconds;
        minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
        seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
    };
    return ApiService;
}());
ApiService = __decorate([
    core_1.Injectable()
], ApiService);
exports.ApiService = ApiService;
