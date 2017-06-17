import { Component, OnInit } from '@angular/core';
import { Mix } from '../services/Mix';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-arrivel',
  templateUrl: './arrivel.component.html',
  styleUrls: ['./arrivel.component.css']
})
export class ArrivelComponent implements OnInit {

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
