import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lodedFeature = 'arrival';

  onNav(feature: string) {
    this.lodedFeature = feature;
  }

}
