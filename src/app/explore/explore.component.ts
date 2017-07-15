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
  alertDeleted: string = '';
  alertCreated: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
      });
  }
  private deletedMix(mix) {
    this.apiService.deleteMix(mix)
      .then()
  }
  onDelete(val) {
    this.deletedMix(val.deleteMixName);
    this.alertDeleted=`Success: <i>${val.deleteMixName}</i> was Deleted`;
  }
  private createMix(name, creator, track1, track2, track3){
    this.apiService.createMix(name, creator, track1, track2, track3)
      .then()
  }
  onCreate(val){
    this.createMix(val.createMixName,val.creator,val.trackId1,val.trackId2,val.trackId3);
    this.alertCreated=`Success: <i>${val.createMixName}</i> was Created`;
  }
}
