import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css']
})
export class ArrivalComponent implements OnInit {

  allMixes: Mix[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
        console.log(this.allMixes);
    });
  }

  // CONVERT MILLISECONDS TO DIGITAL CLOCK FORMAT
  convertMillisecondsToDigitalClock(ms) {
    const minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
          seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
  return  minutes + ':' + seconds;
}
}
