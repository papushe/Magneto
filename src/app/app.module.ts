import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixTapeComponent } from './mix-tape/mix-tape.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ApiService } from './services/api.service';
import { YouTubeApiService } from './services/youtube.api.service';
import { YoutubePlayerModule } from 'ng2-youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixTapeComponent,
    ArrivalComponent,
    AboutComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule,
    RouterModule.forRoot([
      {
        path: 'mix-tape',
        component: MixTapeComponent
      },
      {
        path: 'arrival',
        component: ArrivalComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'explore',
        component: ExploreComponent
      }
    ])
  ],
  providers: [ApiService, YouTubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
