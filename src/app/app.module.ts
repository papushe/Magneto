import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixTapeComponent } from './mix-tape/mix-tape.component';
import { ArrivelComponent } from './arrivel/arrivel.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixTapeComponent,
    ArrivelComponent,
    AboutComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'mix-tape',
        component: MixTapeComponent
      },
      {
        path: 'arrivel',
        component: ArrivelComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
