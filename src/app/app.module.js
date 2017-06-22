"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var mix_tape_component_1 = require("./mix-tape/mix-tape.component");
var arrival_component_1 = require("./arrival/arrival.component");
var about_component_1 = require("./about/about.component");
var explore_component_1 = require("./explore/explore.component");
var api_service_1 = require("./services/api.service");
var youtube_api_service_1 = require("./services/youtube.api.service");
var ng2_youtube_player_1 = require("ng2-youtube-player");
var youtube_player_service_1 = require("ng2-youtube-player/src/services/youtube-player.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            mix_tape_component_1.MixTapeComponent,
            arrival_component_1.ArrivalComponent,
            about_component_1.AboutComponent,
            explore_component_1.ExploreComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            ng2_youtube_player_1.YoutubePlayerModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'mix-tape',
                    component: mix_tape_component_1.MixTapeComponent
                },
                {
                    path: 'arrival',
                    component: arrival_component_1.ArrivalComponent
                },
                {
                    path: 'about',
                    component: about_component_1.AboutComponent
                },
                {
                    path: 'explore',
                    component: explore_component_1.ExploreComponent
                }
            ])
        ],
        providers: [api_service_1.ApiService, youtube_api_service_1.YouTubeApiService, youtube_player_service_1.YoutubePlayerService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
