import { Component, AfterViewInit, ViewChild, Input, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css'],
  host: {
    '(window:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class WelcomeFormComponent implements AfterViewInit {
  @ViewChild('player') player;
  baseUrl:string;
  host: string = window.location.hostname;
  @Input() src;

  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit() {
    this.baseUrl = (this.host === 'localhost') ? `../../assets/sounds/` : `assets/sounds/`;
    this.src = `${this.baseUrl}1.mp3`; //init
    this.cdr.detectChanges();

  }
  @HostListener('window:keydown', ['$event'])
  getRandomSound() {
    let whichSound = Math.floor(Math.random() * (8)) + 1;
    this.src = `${this.baseUrl}${whichSound}.mp3`;
    this.playSound();
  }

  playSound() {
    let playPromise = this.player.nativeElement.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {

      }).catch(error => {});
    }
  }
}
