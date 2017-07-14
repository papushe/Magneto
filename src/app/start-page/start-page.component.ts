import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private apiService: ApiService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    console.log(this.document.location.hash);
  }
}
