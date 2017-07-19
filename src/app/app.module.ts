import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { YoutubePlayerModule } from 'ng2-youtube-player';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixTapeComponent } from './mix-tape/mix-tape.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ApiService } from './services/api.service';
import { youTubePlayerService } from './services/youtube.player';
import {AppRoutingModule} from './app-routing.module';
import { StartPageComponent } from './start-page/start-page.component';
import { WelcomeFormComponent } from './welcome-form/welcome-form.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixTapeComponent,
    ArrivalComponent,
    AboutComponent,
    ExploreComponent,
    StartPageComponent,
    WelcomeFormComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
    AppRoutingModule,
  ],
  providers: [ApiService, {provide: LocationStrategy, useClass: HashLocationStrategy} ,youTubePlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
