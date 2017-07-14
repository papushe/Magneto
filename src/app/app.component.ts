import { Component,Inject, OnInit } from '@angular/core';
import {ApiService} from "./services/api.service";
import {youTubePlayerService} from "./services/youtube.player";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lodedFeature = 'arrival';

  constructor (private apiService: ApiService, private player: youTubePlayerService, @Inject(DOCUMENT) private document: any) {
  }
  ngOnInit() {
  }

  onNav(feature: string) {
    this.lodedFeature = feature;
  }

}
