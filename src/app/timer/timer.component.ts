import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {
  private _state:string;


  ticks = 0;
  timer:any;
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;

  sub: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  @Input() set state (value:string) {
    if (value === 'stop') {this.stopTimer()}
    if (value === 'play') {this.continueTimer()}
    if (value === 'pause') {this.pauseTimer()}
    this._state = value;

  }

  private startTimer() {

    this.timer = Observable.timer(1, 1000);
    this.sub = this.timer.subscribe(
      t => {
        this.ticks = t;

        this.secondsDisplay = this.getSeconds(this.ticks);
        this.minutesDisplay = this.getMinutes(this.ticks);
      }
    );
  }
  private stopTimer() {
    this.sub.unsubscribe();
    this.secondsDisplay = 0;
    this.minutesDisplay = 0;
    this.hoursDisplay = 0;
  }
  private pauseTimer() {
   this.sub.unsubscribe();
  }
  private continueTimer() {

  }
  private getSeconds(ticks: number) {
    return this.pad(ticks % 60);
  }

  private getMinutes(ticks: number) {
    return this.pad((Math.floor(ticks / 60)) % 60);
  }

  private pad(digit: any) {
    return digit <= 9 ? '0' + digit : digit;
  }
}
