import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  { Mix } from './Mix';
import  { Track } from './Track';


@Injectable()
export class ApiService {

  constructor(private _http: Http) { }
  baseUrl: string = 'https://magneto-ws.herokuapp.com';

  getAllMixes(): Promise<Mix[]> {
    return this._http.get(`${this.baseUrl}/getAllMixes`)
      .toPromise()
      .then(response => response.json() as Mix[])
      .catch(err => err.json());
  }

  getAllTracks(): Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/getAllTracks`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err.json());
  }

  getTracksByMixName(mixName): Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/get/${mixName}`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err.json());
  }

  getRandomTracks() :Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/getRandomTracks`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err.json());
  }

  convertMillisecondsToDigitalClock(ms) {
    const minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
      seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
    return  minutes + ':' + seconds;
  }
}
