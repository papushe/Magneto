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
  currentTrack: Track;
  whichTrackPlay: number;
  pausedTrack: boolean = false;

  constructor(private apiService: ApiService, private currentPlayedTrack: youTubePlayerService) {
    this.currentPlayedTrack.idSet('MwSkC85TDgY');
  }

  ngOnInit() {
    this.apiService.getRandomMixes(4)
      .then((mixes: Mix[]) => {
        this.relatedMixes = mixes;
        if(this.apiService.selectedMix ) {
          this.selectedMix = this.apiService.selectedMix
        }
        else {
          this.selectedMix = this.relatedMixes[3];
        }

        this.apiService.getTracksByMixName(this.selectedMix.mix_name)
          .then((tracks: Track[]) => {
            this.selectedTracks = tracks;
          });
    });
    this.whichTrackPlay = -1;
  }
  pause() {
    this.currentPlayedTrack.pauseVideo();
    this.pausedTrack = true;
  }
  play() {
    if(!this.pausedTrack) {this.trackResolver();}
    this.currentPlayedTrack.playVideo();
    this.pausedTrack = false;
  }
  startOver() {
    this.currentPlayedTrack.startOver();
  }
  playNext() {
    this.play();
  }
  stop() {
    this.startOver();
    this.pause();
  }
  onTrackSelected(index: number) {
    this.whichTrackPlay = index-1;
    this.trackResolver();
  }
  onSelect(selectedMix: Mix) {
    this.apiService.selectedMix = selectedMix;
    this.ngOnInit();
  }
  trackResolver() {
    if(this.whichTrackPlay === this.selectedTracks.length - 1) {
      this.whichTrackPlay = 0;
    }
    else {
      this.whichTrackPlay++;
    }
    this.currentTrack =  this.selectedTracks[this.whichTrackPlay];
    this.currentPlayedTrack.loadVideo(this.selectedTracks[this.whichTrackPlay].src);
  }
}
