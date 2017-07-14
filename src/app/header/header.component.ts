import {Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  constructor(@Inject(DOCUMENT) private document: any) { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
  ngOnInit() {
  }

}
