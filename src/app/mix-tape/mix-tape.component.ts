import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { Track } from '../services/Track';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mix-tape',
  templateUrl: './mix-tape.component.html',
  styleUrls: ['./mix-tape.component.css']
})
export class MixTapeComponent implements OnInit {

  relatedMixes: Mix[];
  selectedMixName: Mix;
  selectedTracks: Track[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRandomMixes(4)
      .then((mixes: Mix[]) => {
        this.relatedMixes = mixes;
        this.selectedMixName = this.apiService.selectedMix || this.relatedMixes[3];

        this.apiService.getTracksByMixName(this.selectedMixName.mix_name)
          .then((tracks: Track[]) => {
            this.selectedTracks = tracks;
          });

      });
  }
}
