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
}
