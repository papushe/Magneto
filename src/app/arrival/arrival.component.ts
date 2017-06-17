import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { Track } from '../services/Track';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent implements OnInit {

  allMixes: Mix[];
  randomTracks: Track[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
        console.log(this.allMixes);
    });

    this.apiService.getRandomTracks()
      .then((tracks: Track[]) => {
        this.randomTracks = tracks;
        console.log(this.allMixes);
    });
  }
}
