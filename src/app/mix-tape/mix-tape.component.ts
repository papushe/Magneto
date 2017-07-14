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



  constructor(private apiService: ApiService, private currentPlayedTrack: youTubePlayerService) {
    currentPlayedTrack.idSet('MwSkC85TDgY');
  }

  ngOnInit() {
    this.apiService.getRandomMixes(4)
      .then((mixes: Mix[]) => {
        this.relatedMixes = mixes;
        this.selectedMix = this.apiService.selectedMix || this.relatedMixes[3];

        this.apiService.getTracksByMixName(this.selectedMix.mix_name)
          .then((tracks: Track[]) => this.selectedTracks = tracks);
    });
  }
  pause() {
     this.currentPlayedTrack.pauseVideo();
  }
  onTrackSelected(track: string) {

    console.log("this id " + track);

    console.log("before 8888888 " + this.currentPlayedTrack.id);

    this.currentPlayedTrack.idSet(track);
    // this.currentPlayedTrack.srcSet(track);

    console.log("after 999999999 " + this.currentPlayedTrack.id);
    this.currentPlayedTrack.playVideo();

  }





}
