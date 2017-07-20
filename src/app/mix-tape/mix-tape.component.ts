import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { Track } from '../services/Track';
import { ApiService } from '../services/api.service';
import { youTubePlayerService } from '../services/youtube.player';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'app-mix-tape',
  templateUrl: './mix-tape.component.html',
  styleUrls: ['./mix-tape.component.css']
})
export class MixTapeComponent implements OnInit {

  relatedMixes: Mix[];
  timer: any;
  selectedMix: Mix;
  selectedTracks: Track[];
  currentTrack: Track;
  whichTrackPlay: number;
  pausedTrack: boolean = false;
  isErrorOccurred:boolean;
  randomNumber: number = 0;
  isMuted:boolean = false;

  constructor(private apiService: ApiService, private currentPlayedTrack: youTubePlayerService) {
  }
  ngOnInit() {
    this.randomNumber = this.apiService.randomNumber();
    this.currentPlayedTrack.idSet('MwSkC85TDgY');
    this.apiService.getRandomMixes(4)
      .then((mixes: Mix[]) => {
        this.relatedMixes = mixes;
        if(this.apiService.selectedMix ) {
          this.selectedMix = this.apiService.selectedMix
        }
        else {
          this.selectedMix = this.relatedMixes[3];
        }
        this.isErrorOccurred = false;
        this.apiService.getTracksByMixName(this.selectedMix.mix_name)
          .then((tracks: Track[]) => {
            this.selectedTracks = tracks;
            this.isErrorOccurred = false;
          }).catch(err => {
          console.log(`error when trying to connect to server ${err}`);
          this.isErrorOccurred = true;
        });
    }).catch(err => {
      console.log(`error when trying to connect to server ${err}`);
      this.isErrorOccurred = true;
    });
    this.whichTrackPlay = -1;
  }
  pause() {
    this.currentPlayedTrack.pauseVideo();
    this.pausedTrack = true;
  }
  play() {
    if(!this.pausedTrack) {this.trackResolver();}
    this.timer = Observable.timer(1000, 1000);
    this.timer.subscribe(() => this.getCurrentPlayedTime());
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
  muteToggle() {
    if (this.isMuted)  this.currentPlayedTrack.unMute();
    else this.currentPlayedTrack.mute();
    this.isMuted = !this.isMuted;
  }
  onTrackSelected(index: number) {
    this.whichTrackPlay = index-1;
    this.play();
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
    this.currentTrack = this.selectedTracks[this.whichTrackPlay];
    this.currentPlayedTrack.loadVideo(this.selectedTracks[this.whichTrackPlay].src);
  }
  getTime(ms) {
    return this.apiService.convertMillisecondsToDigitalClock(ms);
  }
  getCurrentPlayedTime() {
    if (this.currentPlayedTrack != undefined && this.currentPlayedTrack.getState() === 0) this.play();
    return this.getTime(this.currentPlayedTrack.getDuration());
  }
}
