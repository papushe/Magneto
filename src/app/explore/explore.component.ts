import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  allMixes: Mix[];
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
      });




  }



  private postData(a) {
    this.apiService.deleteMix(a)
      .then()
  }
  onDelete(val) {
    this.postData(val.mixName);
    console.log(val.mixName);
  }
}
