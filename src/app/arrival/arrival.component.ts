import { Component, OnInit} from '@angular/core';
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
  isSelectedDifined = false;
  selectedTrack: Track;

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
    });
    this.apiService.getRandomTracks(7)
      .then((tracks: Track[]) => {
        this.randomTracks = tracks;
        this.selectedTrack = this.randomTracks[0];
        this.isSelectedDifined = true;
      });
  }
  onSelect(selectedMix: Mix) {
    this.apiService.selectedMix = selectedMix;
  }
}
