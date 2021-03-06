import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import  { Mix } from './Mix';
import  { Track } from './Track';


@Injectable()
export class ApiService {

  selectedMix: Mix;
  baseUrl = 'https://magneto-ws.herokuapp.com';
  constructor(private _http: Http) { }
  getAllMixes(): Promise<Mix[]> {
    return this._http.get(`${this.baseUrl}/getAllMixes`)
      .toPromise()
      .then(response => response.json() as Mix[])
      .catch(err => err);
  }
  getAllTracks(): Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/getAllTracks`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err);
  }
  getTracksByMixName(mixName): Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/get/${mixName}`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err);
  }
  getRandomTracks(trackCount: number): Promise<Track[]> {
    return this._http.get(`${this.baseUrl}/getRandomTracks/${trackCount}`)
      .toPromise()
      .then(response => response.json() as Track[])
      .catch(err => err);
  }
  getRandomMixes(mixCount: number): Promise<Mix[]> {
    return this._http.get(`${this.baseUrl}/getRandomMixes/${mixCount}`)
      .toPromise()
      .then(response => response.json() as Mix[])
      .catch(err => err);
  }
  deleteMix(mixName: string): Promise<Mix[]> {
    return this._http.get(`${this.baseUrl}/dropMix/${mixName}`)
      .toPromise()
      .then(response => response.json() as Mix[])
      .catch(err => err);
  }
  createMix(mixName: string, creator: string, track1: number, track2: number, track3: number): Promise<Mix[]> {
    return this._http.get(`${this.baseUrl}/createNewMix/${mixName}/${creator}/${track1}/${track2}/${track3}`)
      .toPromise()
      .then(response => response.json() as Mix[])
      .catch(err => err);
  }
  convertMillisecondsToDigitalClock(ms) {
    let minutes: any, seconds: any;
    minutes = Math.floor((ms % 3600000) / 60000); // 1 Minutes = 60000 Milliseconds
    seconds = Math.floor(((ms % 360000) % 60000) / 1000); // 1 Second = 1000 Milliseconds
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return  minutes + ':' + seconds;
  }
  randomNumber(){
   return Math.floor(Math.random() * (3));
  }
}
