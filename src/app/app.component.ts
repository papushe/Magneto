import { Component } from '@angular/core';
import {ApiService} from "./services/api.service";
import {youTubePlayerService} from "./services/youtube.player";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lodedFeature = 'arrival';

  constructor (private apiService: ApiService, private player: youTubePlayerService) {}

  onNav(feature: string) {
    this.lodedFeature = feature;
  }

}
