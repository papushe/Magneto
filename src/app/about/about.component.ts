import { Component, AfterViewInit, ViewChild, Renderer, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  host: {
    '(window:keydown)': 'handleKeyboardEvents($event)'
  }
})
export class AboutComponent implements AfterViewInit {
  @Input() src: string;
  @ViewChild('player') player;

  baseUrl:string = '../../assets/sounds/';

  constructor() { }

  ngAfterViewInit() {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent() {
    this.getRandomSound();
    this.playSound();
  }

  getRandomSound() {
    let whichSound  = Math.floor(Math.random() * (8)) + 1;
    this.src =  `${this.baseUrl}${whichSound}.mp3`;
  }

  playSound() {
    let playPromise = this.player.nativeElement.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {

      }).catch(error => {});
    }
  }
}
