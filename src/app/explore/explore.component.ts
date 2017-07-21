import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { ApiService } from '../services/api.service';
import {retry} from "rxjs/operator/retry";

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
  isFormValid: boolean = false;
  conflict: boolean = false;
  isErrorOccurred:boolean = false;
  alertCantDeleted: string = '';
  createMixName: string = '';
  creator: string = '';
  trackId1:number;
  trackId2:number;
  trackId3:number;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllMixes()
      .then((mixes: Mix[]) => {
        if(mixes.constructor.name === 'Response') {
          this.isErrorOccurred = true;
        }
        else {
          this.allMixes = mixes;
          this.isErrorOccurred = false;
        }
      }).catch((err => {
      console.log(`error when trying to connect to server ${err}`);
      this.isErrorOccurred = true;
      }))
  }

  onDelete(val) {
    if(!val.deleteMixName){
      val.deleteMixName = 'first mix';
      this.alertCantDeleted=`Failure: <i>${val.deleteMixName}</i> was not Deleted, you can't delete mix from 1 to 15`;
      return;
    }
    if(val.deleteMixName === 'first mix' || val.deleteMixName === 'second mix' ||val.deleteMixName === 'third mix' ||val.deleteMixName === 'fourth mix' ||
      val.deleteMixName === 'fifth mix' ||val.deleteMixName === 'sixth mix' ||val.deleteMixName === 'seventh mix' ||val.deleteMixName === 'eighth mix' ||
      val.deleteMixName === 'ninth mix' ||val.deleteMixName === 'tenth mix' ||val.deleteMixName === 'eleventh mix' ||val.deleteMixName === 'twelfth mix' ||
      val.deleteMixName === 'thirteen mix' ||val.deleteMixName === 'fourteen mix' ||val.deleteMixName === 'fifteen mix'){
      this.alertDeleted='';
      this.alertCantDeleted=`Failure: <i>${val.deleteMixName}</i> was not Deleted, you can't delete mix from 1 to 15`;
      return;
    }
    this.apiService.deleteMix(val.deleteMixName).then(() => {this.isErrorOccurred = false;})
      .catch(err => {
        console.log(`error when trying to connect to server ${err}`);
        this.isErrorOccurred = true;
        this.alertCantDeleted ='';
        this.alertDeleted=`Failure: <i>${val.deleteMixName}</i> was not Deleted`;

      });
    this.ngOnInit();
    this.alertCantDeleted ='';
    this.alertDeleted=`Success: <i>${val.deleteMixName}</i> was Deleted`;
  }
  private createMix(name, creator, track1, track2, track3){
    this.apiService.createMix(name, creator, track1, track2, track3)
      .then(() => {this.isErrorOccurred = false;})
      .catch(err => {
        console.log(`error when trying to connect to server ${err}`);
        this.isErrorOccurred = true;
      });
    this.ngOnInit();
  }

  onForm(val){
    this.checkFormValidity(val);
    this.clear();
    if(this.isFormValid){
      this.createMix(val.createMixName,val.creator,val.trackId1,val.trackId2,val.trackId3);
      this.successMsg(val);
    }else {
      this.failureMsg(val);
    } if(this.conflict){
      this.conflictTrack(val);
    }
  }
  clear(){
    this.createMixName = null;
    this.creator = null;
    this.trackId1 = null;
    this.trackId2 = null;
    this.trackId3 = null;
  }
  checkFormValidity(val) {
    if(val.trackId1 === val.trackId2 || val.trackId1 === val.trackId3 || val.trackId2 === val.trackId3){
      this.isFormValid = false;
      this.conflict = true;
      return;
    }
    if((val.trackId1 >= 1 && val.trackId1 < 10) && (val.trackId2 >= 1 && val.trackId2 < 10) && (val.trackId3 >= 1 && val.trackId3 < 10)) {
      this.conflict = false;
      this.isFormValid = true;
    }
  }

  successMsg(val){
    this.alertNotCreated= '';
    this.alertCreated=`Success: <i>${val.createMixName}</i> was Created`;
  }
  failureMsg(val){
    this.alertCreated='';
    this.alertNotCreated=`Error: <i>${val.createMixName}</i> not Created, tracks must be from 1 to 9`;
  }
  conflictTrack(val){
    this.alertCreated='';
    this.alertNotCreated=`Error: <i>${val.createMixName}</i> not Created, You can't choose same Tracks`;
  }
}
