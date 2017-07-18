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
  alertNotCreated: string = '';
  isFormValid: boolean;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        this.allMixes = mixes;
      });
  }

  onDelete(val) {
    this.apiService.deleteMix(val.deleteMixName);
    this.ngOnInit();
    this.alertDeleted=`Success: <i>${val.deleteMixName}</i> was Deleted`;
  }
  private createMix(name, creator, track1, track2, track3){
    this.apiService.createMix(name, creator, track1, track2, track3);
    this.ngOnInit();
  }
  onCreate(val){

    this.checkFormValidity(val);

    if(this.isFormValid){
      this.createMix(val.createMixName,val.creator,val.trackId1,val.trackId2,val.trackId3);
      this.alertNotCreated= '';
      this.alertCreated=`Success: <i>${val.createMixName}</i> was Created`;
    }else {
      this.alertCreated='';
      this.alertNotCreated=`Error: <i>${val.createMixName}</i> not Created`;
    }
  }
  checkFormValidity(val:any) {
    if((val.trackId1 >= 1 && val.trackId1 < 10) && (val.trackId2 >= 1 && val.trackId2 < 10)
      && (val.trackId3 >= 1 && val.trackId3 < 10)) {
      this.isFormValid = true;
    }
  }
}
