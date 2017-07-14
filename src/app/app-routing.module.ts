/**
 * Created by papushe on 16/06/2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { MixTapeComponent } from './mix-tape/mix-tape.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import {StartPageComponent} from './start-page/start-page.component';
import {WelcomeFormComponent} from './welcome-form/welcome-form.component'

const appRouts: Routes = [
  {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {path: 'mix-tape', component: MixTapeComponent},
  {path: 'arrival', component: ArrivalComponent},
  {path: 'about', component: AboutComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'start-page', component: StartPageComponent},
  {path: 'welcome-form', component: WelcomeFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule]
})

export  class AppRoutingModule {
}
