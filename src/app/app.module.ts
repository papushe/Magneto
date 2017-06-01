import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixTapeComponent } from './header/right-nav/mix-tape/mix-tape.component';
import { RightNavComponent } from './header/right-nav/right-nav.component';
import { ArrivelComponent } from './header/right-nav/arrivel/arrivel.component';
import { AboutComponent } from './header/right-nav/about/about.component';
import { ExploreComponent } from './header/right-nav/explore/explore.component';
import { LogoComponent } from './header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixTapeComponent,
    RightNavComponent,
    ArrivelComponent,
    AboutComponent,
    ExploreComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
