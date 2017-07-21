import { Component, AfterViewInit, ViewChild, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.css'],
  host: {
    '(window:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class WelcomeFormComponent implements AfterViewInit {
  @Input() src: string;
  @ViewChild('player') player;

  baseUrl:string = '../../assets/sounds/';

  constructor() { }
  ngAfterViewInit() {}
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
