import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { Track } from '../services/Track';
import { ApiService } from '../services/api.service';
import { youTubePlayerService } from '../services/youtube.player';

@Component({
  selector: 'app-mix-tape',
  templateUrl: './mix-tape.component.html',
  styleUrls: ['./mix-tape.component.css']
})
export class MixTapeComponent implements OnInit {

  relatedMixes: Mix[];
  selectedMix: Mix;
  selectedTracks: Track[];
  currentPlayedTrack = new youTubePlayerService();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getRandomMixes(4)
      .then((mixes: Mix[]) => {
        this.relatedMixes = mixes;
        this.selectedMix = this.apiService.selectedMix || this.relatedMixes[3];

        this.apiService.getTracksByMixName(this.selectedMix.mix_name)
          .then((tracks: Track[]) => {
            this.selectedTracks = tracks;
            console.log(this.selectedTracks);
          });
    });
  }

  playTrack(track: Track) {
    this.currentPlayedTrack.id = track.src || this.selectedTracks[0].src;
  }


}
