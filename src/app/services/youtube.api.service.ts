/**
 * Created by Haimov on 18/06/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import  { Mix } from './Mix';
import  { Track } from './Track';

@Injectable()
export class YouTubeApiService {

  youTubeBaseUrl: string = 'https://www.googleapis.com/youtube/v3/search';
    youTubeToken: string = 'AIzaSyCm66pNC3bikA2ReKuaOXGl0WF_0Xw31_Q';

  constructor(private _http: Http) { }

  search(query) {
    return this._http.get(`${this.youTubeBaseUrl}?q=${query}&part=snippet&key=${this.youTubeToken}`)
      .map((res: Response) => res.json())
      .map(json => json.items);
  }



}
